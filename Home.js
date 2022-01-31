import React from 'react';
import { StyleSheet,View,Text ,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import bannerImage from './assets/bro.png'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            
           
            {/* start banner section */}
            <View style={styles.bannerBox}>
                <Image style={styles.bannerImageStyle} source={{uri:bannerImage}}/>
                <Text style={styles.bannerText}>We Need To Change</Text>
                <Text style={{color:"white",fontSize: 30,margin:0,marginLeft:9}}>Our Scoiety</Text>
                <Text style={{color:'white', fontSize:17, marginLeft:9,marginTop:7}}>lorem ispum dollar site, immet, hello friends,lorem ispum dollar site, immet, hello friends,</Text>
            </View>
            {/* end banner section */}
            {/* start login and register sectio */}
            <View>
                <TouchableOpacity style={styles.button}>
                <Text style={{color:"#3EB489",fontSize:18}}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={{color:"#3EB489",fontSize:18}}>Login As Guest</Text>
                </TouchableOpacity>
            </View>
            {/* end login and register sectio */}
            {/* route */}
        </View>

        
    );
};
const styles = StyleSheet.create({
    homeContainer:{
        backgroundColor:"#3EB489",
        padding:10,
        paddingBottom:40
    },
    flexBox:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textStyle:{
        color:"white",
        fontSize: 30,
        margin:0,
    },
    iconFlex:{
        flexDirection: "row",
        
    },
    iconStyle:{
        fontSize:20,
        color:"white",
        marginRight:9
    },
    bannerBox:{
        overflow:'hidden',
    },
    bannerImageStyle:{
        width: 342,
        height: 280,
        marginTop:50
        
    },
    bannerText:{
        color:"white",
        fontSize: 30,
        margin:0,
        marginTop:14,
        marginLeft:9
    },
//    start login and register 
    button:{
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        marginTop:16
    }
  });
export default Home;