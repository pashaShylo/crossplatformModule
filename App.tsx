import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable, TextInput } from 'react-native';
import { Bird } from './classes';
import { useState } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import {Controller, useForm} from 'react-hook-form';
export default function App() {
  const [firstInput, setFirstInput] = useState<string>('')
  const [flyOpen, setFlyOpen] = useState(false);
  const [flyValue, setFlyValue] = useState(null);
  const [swimOpen, setSwimOpen] = useState(false);
  const [swimValue, setSwimValue] = useState(null);
  const yesNo = [
    { label: "Так", value: true },
    { label: "Ні", value: false },
  ]
  const [birds, setBirds] = useState<Bird[]>([new Bird('Фламінго', true, true), new Bird('Пінгвін', true, false), new Bird('Ківві', false, false)])
  const { handleSubmit, control } = useForm();
  const addBird = () => {
    if(flyValue === null || swimValue === null || firstInput === ''){
      return
    }
    const bird = new Bird(firstInput, swimValue, flyValue)
    if(birds.find((el: Bird)=>{
      return el.getName() == bird.getName()
    })){
      return
    }
    setBirds([...birds, new Bird(firstInput, swimValue, flyValue)])
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Controller
        name="company"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdown1}>
            <DropDownPicker
                    style={styles.dropdown}
                    open={flyOpen}
                    value={flyValue}
                    items={yesNo}
                    setOpen={setFlyOpen}
                    setValue={setFlyValue}
                    placeholder="Птах вміє літати?"
                    placeholderStyle={styles.placeholderStyles}
                    activityIndicatorColor="#5188E3"
                    searchable={false}
                    searchPlaceholder="Search your company here..."
                    onChangeValue={onChange}
                    zIndex={1001}
                    zIndexInverse={3001}
                  />
          </View>
        )}
      />
      <Controller
        name="company"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdown2}>
            <DropDownPicker
                    style={styles.dropdown}
                    open={swimOpen}
                    value={swimValue}
                    items={yesNo}
                    setOpen={setSwimOpen}
                    setValue={setSwimValue}
                    placeholder="Птах вміє плавати?"
                    placeholderStyle={styles.placeholderStyles}
                    activityIndicatorColor="#5188E3"
                    searchable={false}
                    searchPlaceholder="Search your company here..."
                    onChangeValue={onChange}
                    zIndex={1000}
                    zIndexInverse={3000}
                  />
          </View>
        )}
      />
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, borderColor: '#82ccdd', borderWidth: 4, borderRadius: 12, width: 200}} placeholder='Введіть назву птаха' onChangeText={text => setFirstInput(text)}/>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={addBird}>
            <Text style={styles.text}>Додати</Text>
        </Pressable>
        {birds.map((el: Bird) => {
          return <Text key = {el.getName()} style={{fontSize: 20, paddingTop: 10}}>{el.getName()+ " " + el.getVoliere().getArea()+' м²'}</Text>
        })}
        <Text style={{fontSize: 20, paddingTop: 10}}>Сумарна площа = {birds.reduce((sum: number, el: Bird) => {
          return sum + el.getVoliere().getArea()
        }, 0)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200
  },
  dropdown: {
    borderColor: "#82ccdd",
    borderWidth: 4, 
    borderRadius: 12,
    height: 50,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdown1: {
    marginHorizontal: 10,
    marginBottom: 15,
    width: 200,
    zIndex: 20
  },
  dropdown2: {
    marginHorizontal: 10,
    marginBottom: 15,
    width: 200,
    zIndex: 10
  },
});
