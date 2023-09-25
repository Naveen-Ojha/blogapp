import React ,{useState,useEffect, useContext} from 'react';
import {  FlatList, Image, SafeAreaView,ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { apiEndPoint, domainPoint } from '../../environment';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoryContext } from '../context/CategoryContext';

const CategoryScreen =({ navigation, route }) =>  {

const { categoryName } = useContext(CategoryContext)
const Separator = () => <View style={styles.separator} />;
const [data,setData]=useState([])
const [limit,setLimit]=useState(10)
const apiurl=`${apiEndPoint}category/${route.params.slug}?_limit=${limit}`
const fetchdata=()=>{
  fetch(apiurl)
  .then((response)=>response.json())
  .then((jsondata)=>{setData(jsondata)})
  .catch((err)=>console.log(err))
}
useEffect(()=>{
fetchdata()
},[])
const render=({item})=>{
    const words = item.PostTitle.split(' ');
    const truncatedTitle = words.slice(0, 10).join(' ');
    const PostImages = validateText(item.PostThumbUrl)
    const getPostImages = PostImages ? item.PostThumbUrl : `${domainPoint}${item.PostThumbUrl}`
  
  return(
     <View key={item.ID}>
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
                        navigation.navigate('Details', { user: item.ID })
                    }
                        style={styles.title}>{truncatedTitle}...</Text>
                    <View style={styles.fixToText}>
                        <Text>
                            <MaterialCommunityIcons name="circle-medium" color="#000" size={20} style={{ alignItems: 'center' }} />
                            {categoryName[item.CatId].TermName}</Text>
                        <Text>
                            <MaterialCommunityIcons name="circle-medium" color="#000" size={20} style={{ alignItems: 'center' }} />
                            {moment.utc(item.Date).local().startOf('seconds').fromNow()}</Text>
                    </View>
                </View>
            </View>
        </View>
        <Separator />
    </View>
  )
}
const loadmore=()=>{
  console.log('end reached!!')
  const Separator = () => <View>You Have Reached The End</View>;
  setLimit(limit+5)
  fetchdata()
  console.log(apiurl)
}

const  validateText=(str)=> {
    var tarea = str;
    if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
        return true
    } else {
        return false
    }
}

const renderFooter = () =>{
 return(
       <View style={{justifyContent:"center",alignItems:'center'}}>
         <ActivityIndicator size="large" color="#00ff00" />
       </View>
     )
 }

return (
    
    <SafeAreaView style={styles.container}>
    

 {/* <Text style={{fontSize:18,fontWeight:'bold'}}>React Native FlatList Load More On Scroll</Text> 
  <Text style={{fontSize:16,fontWeight:'bold'}}>Programming with savio</Text> */}

<FlatList
data={data}
renderItem={render}
keyExtractor={(item,i)=>i.toString()}
ListFooterComponent={renderFooter}
onEndReached={()=>{loadmore()}}

/>
   </SafeAreaView>
   
  );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 6,
        width:'100%',
        flex:1
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

export default CategoryScreen;
