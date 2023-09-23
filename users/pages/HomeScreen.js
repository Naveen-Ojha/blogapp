import React, { useContext, useEffect, useState } from 'react';
import { StackActions } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    RefreshControl,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slideshow from "react-native-image-slider-show";
import moment from 'moment';
import { apiEndPoint, domainPoint } from '../../environment'
import { CategoryContext } from '../context/CategoryContext';
const Separator = () => <View style={styles.separator} />;


export default function HomeScreen({ navigation }) {
    const { categoryName } = useContext(CategoryContext)

    const [postImages, setPostImages] = useState({
        fetched_images: []
    })
    const [state, setstate] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const DomainName = domainPoint

    const formatImages = (images) => {
        return images.map(image => {
            return {
                id: image.ID,
                title: image.PostTitle,
                url: `${DomainName}/${image.PostThumbUrl}`
            }
        })
    }

    function getHomeData() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}featured`, requestOptions)
            .then(response => response.json())
            .then(result => {
                const formattedImages = formatImages(result)
                setstate(result),
                    setPostImages({
                        fetched_images: formattedImages,
                    });
            }
            )
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getHomeData()
    }, [])

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const toggle = setInterval(() => {
            setPosition(position === postImages.fetched_images.length - 1 ? 0 : position + 1);
        }, 3000);

        return () => clearInterval(toggle);
    });


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

            <Slideshow position={position} dataSource={postImages.fetched_images.slice(0, 4)}
                titleStyle={styles.titleColor} indicatorSelectedColor="#ff0036"
                onPress={(image) => { navigation.dispatch(StackActions.push('Details', { user: image.image.id })) }} />

            <SafeAreaView style={styles.container}>
                {
                    state.map((val) => {
                        const { ID, PostTitle, CatId, PostThumbUrl, Date } = val
                        const words = PostTitle.split(' ');
                        const truncatedTitle = words.slice(0, 10).join(' ');
                        const PostImages = `${domainPoint}${PostThumbUrl}`
                        return (
                            <View key={ID}>
                                <View style={[styles.card, styles.shadowProp]}>
                                    <View style={styles.fixToText}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={{
                                                uri: PostImages,
                                            }}
                                        />
                                        <View style={styles.titleBox}>
                                            <Text onPress={() =>
                                                navigation.dispatch(StackActions.push('Details', { user: ID }))
                                            }
                                                style={styles.title}>{truncatedTitle}...</Text>
                                            <View style={styles.fixToText}>
                                                <Text>
                                                    <MaterialCommunityIcons name="circle-medium" color="#000" size={20} style={{ alignItems: 'center' }} />
                                                    {categoryName[CatId].TermName}</Text>
                                                <Text>
                                                    <MaterialCommunityIcons name="circle-medium" color="#000" size={20} style={{ alignItems: 'center' }} />
                                                    {moment.utc(Date).local().startOf('seconds').fromNow()}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <Separator />
                            </View>
                        )
                    })
                }
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 6,
    },
    card: {
        backgroundColor: '#dcebfd',
        textAlign: 'left',
        padding: 10,
        borderRadius: 5,
    },
    titleBox: {
        textAlign: 'justify',
        marginVertical: 6,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: 230
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#cecece',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tinyLogo: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    shadowProp: {
        elevation: 20,
        shadowColor: '#fff',
    },
    ImageOnText: {
        position: 'absolute',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center',
        width: '100%'
    },
    titleColor: {
        color: "#fff",
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20
    }
});
