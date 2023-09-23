import React, { useState, useEffect, useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions, ActivityIndicator } from 'react-native'
import { apiEndPoint, domainPoint } from '../../environment';
import { CategoryContext } from '../context/CategoryContext';
import RenderHtml from 'react-native-render-html';
import moment from 'moment';

export default function DetailsScreen({ navigation, route }) {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryName } = useContext(CategoryContext)
    
    function getPostDetails() {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/${route.params.user}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setResponse(result[0]),
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

    const { PostTitle, PostThumbUrl, CatId, Date, PostContent } = response
    const PostImages = validateText(PostThumbUrl || "")
    const getPostImages = PostImages ? PostThumbUrl : `${domainPoint}${PostThumbUrl}`
    const { width } = useWindowDimensions();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {
                loading ? <ActivityIndicator size="small" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} /> :
                    <View>
                        <Image style={styles.tinyLogo}
                            source={{
                                uri: getPostImages
                            }}
                        />
                        <View style={styles.card}>
                            <View style={styles.date}>
                                <Text style={styles.categoryText}> {categoryName[CatId]?.TermName}</Text>
                                <Text style={styles.categoryText}> {moment(Date).format("MMM Do YY")}</Text>
                            </View>
                            <Text style={styles.PostTitle}>{PostTitle}</Text>
                            <RenderHtml
                                contentWidth={width}
                                source={{ html: PostContent || "" }}
                            />
                        </View>
                    </View>
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    tinyLogo: {
        width: '100%',
        height: 400,
    },
    card: {
        backgroundColor: '#fff',
        textAlign: 'left',
        padding: 10,
        borderRadius: 5,
        marginTop: -50,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'baseline'
    },
    categoryText: {
        backgroundColor: '#00b894',
        borderRadius: 8,
        padding: 8,
        color: '#fff',
        fontWeight: 'bold'
    },
    PostTitle: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '100%'
    }
})