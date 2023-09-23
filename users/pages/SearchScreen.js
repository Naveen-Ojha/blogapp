import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, SafeAreaView, Image } from 'react-native';
import { CategoryContext } from '../context/CategoryContext';
import { apiEndPoint, domainPoint } from '../../environment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

const SearchScreen = ({ navigation, route }) => {
    const [searchValue, setSearchValue] = useState("")

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryName } = useContext(CategoryContext)

    function getPostDetails() {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}search?q=${searchValue}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setResponse(result),
                    setLoading(false)
            })
            .catch(error => {
                console.log('error', error),
                    setLoading(false)
            });
    }

    function validateText(str) {
        if (str != 'undefined') {
            var tarea = str;
            if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
                return true
            } else {
                return false
            }
        }
    }

    useEffect(() => {
        getPostDetails()
    }, [])

    getInputValue = (value) => {
        setSearchValue(value)
    }

    const Separator = () => <View style={styles.separator} />;

    return (
        <View style={styles.centeredView}>
            <TextInput
                style={styles.input}
                onChangeText={getInputValue}
                value={searchValue}
                placeholder='Search...'
            />
            <View style={styles.button}>
                <Button
                    title="Search"
                    color="#ff0036"
                    onPress={getPostDetails}
                />
            </View>
            {
                response.length > 0 ?
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <SafeAreaView style={styles.container}>
                            {
                                response.map((val) => {
                                    const { ID, PostTitle, CatId, PostThumbUrl, Date } = val
                                    const PostImages = validateText(PostThumbUrl || "")
                                    const getPostImages = PostImages ? PostThumbUrl : `${domainPoint}${PostThumbUrl}`
                                    const words = PostTitle.split(' ');
                                    const truncatedTitle = words.slice(0, 10).join(' ');
                                    return (
                                        <View key={ID}>
                                            <View style={[styles.card, styles.shadowProp]}>
                                                <View style={styles.fixToText}>
                                                    <Image
                                                        style={styles.tinyLogo}
                                                        source={{
                                                            uri: getPostImages,
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
                    : <Text style={styles.searchText}>Data not found. Please Check your query..</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        padding: 15,
        backgroundColor: '#fff'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        width: '90%',
        marginLeft: 16,
        marginVertical: 20
    },
    container: {
        // padding: 10,
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
    },
    searchText: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default SearchScreen;