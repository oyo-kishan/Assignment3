import React ,{useState,useEffect}from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Table from '../components/Table';



const url = 'https://gorest.co.in/public-api/users/?page=';
const axios = require('axios');

function isContains(word,key){

    if(key.length>word.length)return false;
    if(key==null)return true;
    word=word.trim().toLowerCase();
    key=key.trim().toLowerCase();

    for(let i=0;i<word.length;i++){
      let mismatch=false;
      for(let j=0;j<key.length && !mismatch;j++){
        if(word.charAt(i+j)!==key.charAt(j))
            mismatch=true; 
      }
      if(!mismatch)return true;
    }
    return false;
  }
  

const FetchUser = () => {

  const [data, setData] = useState([]);
  const [filterText,setFilterText]=useState("");
  const [filterData,setFilterData]=useState([]);
  const [page,setPage]=useState(1);
  const [totalPage,setTotalPage]=useState(1);
  const [loading,setLoading]=useState(true);


    useEffect(() => {
        if(page<=0 || page>totalPage)return;
        setLoading(true);

        let newUrl=url+page;
        axios.get(newUrl).then((response) => {
                const fetchedData = response.data.data;
                setData(fetchedData);
                setTotalPage(response.data.meta.pages);
                setLoading(false);
        });
    },[,page]);


  useEffect(()=>{
      const filter=[];
      for(let i=0;i<data.length;i++){
          const name=data[i].name;
          const email=data[i].email;
          if(isContains(name,filterText )|| isContains(email,filterText)){
              filter.push(data[i]);
          }
      }
      setFilterData(filter);
  },[filterText,data]);


    const sortDataByName=()=>{
        const copy=[...data].sort((item1,item2)=>{
            return item1.name.toLowerCase().localeCompare(item2.name.toLowerCase());
        });
        setData(copy);
    }

    const sortDataByEmail=()=>{
        const copy=[...data].sort((item1,item2)=>{
            return item1.email.toLowerCase().localeCompare(item2.email.toLowerCase());
        })
        setData(copy);
    }

    const onPrevPressed=()=>{
        if(page<=1)return;
        setPage((page)=>page-1);
    }

    const onNextPressed=()=>{
        if(page>=totalPage)return;
        setPage((page)=>page+1);
    }

 return (
         <ScrollView nestedScrollEnabled>

            <View style={styles.root}>
            <TextInput
                style={styles.searchInput}
                onChangeText={(text)=>{setFilterText(text)}}
                selectionColor="black"
                placeholder="Search by name , email..."
            />

            <Table
                heading={["Name","Email","Status"]}
                data={filterData}
                sortByName={()=>{sortDataByName()}}
                sortByEmail={()=>{sortDataByEmail()}}
            />

            {!loading && <View style={styles.paginationView}>
               <TouchableOpacity 
                    onPress={()=>onPrevPressed()} 
                    style={[styles.paginationButton]}>
                    <Text style={styles.paginationButtonText}>Prev</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=>onNextPressed()} 
                    style={styles.paginationButton}>
                    <Text style={styles.paginationButtonText}>Next</Text>
                </TouchableOpacity>
            </View>}
        </View>
     </ScrollView>     
       
    )
};





const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput:{
      width:'90%',
      height:45,
      borderRadius:4,
      paddingLeft:16,
      borderWidth:2,
      borderColor:'black',
      marginTop:40,
      marginBottom:20
    },
    paginationView:{
        height:50,
        justifyContent:'flex-end',
        flexDirection:'row',
        marginBottom:20
    },
    paginationButton:{
        backgroundColor:'black',
        height:30,
        margin:16,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,

    },
    paginationButtonText:{
        color:'white',
        fontWeight:'bold'
    }
    
});

export default FetchUser;
