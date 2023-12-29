import { Button, Image,Text, View, Platform,TouchableOpacity ,StyleSheet,SafeAreaView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [showComponent, setShowComponent] = useState(true)
  const [type, setType] = useState(CameraType.back);
  const [toggle, setToggle] = useState(false)
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }


  return (
    <>
    <View><Text  style={{color:"black", fontWeight:"bold", fontSize:20, marginTop:20, marginLeft:"2%"}}>Profile</Text></View>


    <View style={{ alignItems: 'center', justifyContent: "space-between", marginTop:30, alignItems:"center", flexDirection:"row"}}>

  <View>

    {image && <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius:100, }} />}

    {showComponent&&
    <Image style={{}}source={require('../../assets/imgprof.png')}/>   
        }   
  </View>

        <View style={{flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>

      <View style={{}}>
        <Text style={{color:"#72777A",marginLeft:"5%" }}>Upload from</Text>
      </View>

      <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",marginTop:"2%"}}>
 
      <TouchableOpacity   onPress={() => { pickImage(),setShowComponent(false)}} style={{width:"35%"
 , marginLeft:"3%",height:35,backgroundColor:"#00A08112", justifyContent:"center", alignItems:"center"
      , padding:5, borderRadius:35, borderWidth:2, borderColor:"#00A081"}} >
        <Text style={{color:"#00A081", fontSize:13}}>Photo Library</Text>
    </TouchableOpacity>

    <Text style={{marginLeft:"3%", color:"#72777A"}} >OR</Text>
  
     
    <TouchableOpacity   onPress={() => { setToggle(!toggle)}} style={{width:"35%",
   marginLeft:"3%"   ,height:35,backgroundColor:"#00A08112", justifyContent:"center", alignItems:"center"
      , padding:5, borderRadius:35, borderWidth:2, borderColor:"#00A081"}} >
        <Text style={{color:"#00A081", fontSize:13}}>Use Camera</Text>
    </TouchableOpacity>
   
    </View>
    </View>

    </View>
    {toggle &&
 
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button style={{backgroundColor:"#00A081"}} title="Take Pic"  onPress={takePic}/>
      </View>
      <StatusBar style="auto" />
    </Camera>
}
  
   
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:250,
    marginTop:"5%"
   
  },
  camera: {
    flex: 1,
    marginTop:"10%",
 
  },
  buttonContainer: {
   
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: "50%",
    marginLeft:"38%",
    
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

 /*
{toggle &&
 
  <View style={styles.container}>
    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  </View>
 
  }
   */