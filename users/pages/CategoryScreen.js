import React, { useState, useEffect, useContext } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native'
import moment from 'moment';
import { apiEndPoint, domainPoint } from '../../environment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoryContext } from '../context/CategoryContext';


export default function CategoryScreen({ navigation, route }) {
    const { categoryName } = useContext(CategoryContext)
    const Separator = () => <View style={styles.separator} />;

    const [response, setResponse] = useState([])
    function getCategoryData() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}category/${route.params.slug}`, requestOptions)
            .then(response => response.json())
            .then(result => setResponse(result)
            )
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getCategoryData()
    }, [])

    function validateText(str) {
        var tarea = str;
        if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={styles.container}>
                {
                    response.map((val) => {
                        const { ID, PostTitle, CatId, PostThumbUrl, Date } = val
                        const words = PostTitle.split(' ');
                        const truncatedTitle = words.slice(0, 10).join(' ');
                        const PostImages = validateText(PostThumbUrl)
                        const getPostImages = PostImages ? PostThumbUrl : `${domainPoint}${PostThumbUrl}`
                        return (
                            <View key={ID}>
                                <View style={[styles.card, styles.shadowProp]}>
                                    <View style={styles.fixToText}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={{
                                                uri: getPostImages
                                            }}
                                        />
                                        <View style={styles.titleBox}>
                                            <Text onPress={() =>
                                                navigation.navigate('Details', { user: ID })
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