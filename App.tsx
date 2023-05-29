import { StatusBar } from "expo-status-bar";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Pressable,
    TextInput,
} from "react-native";
import { Shop, Bookstore, DepartmentStore, ShoppingMall } from "./classes";
import { useState } from "react";

export default function App() {
    const [inDepartmentStore, setInDepartmentStore] = useState(false);
    const [inMall, setInMall] = useState(false);
    const [inBookStore, setInBookStore] = useState(false);
    const bookstore = new Bookstore("Book Haven", "Main Street", [
        {
            name: "Book name 1",
            price: 10,
            author: "Author 1",
            genre: "Genre 1",
        },
        {
            name: "Book name 2",
            price: 15,
            author: "Author 2",
            genre: "Genre 2",
        },
    ]);

    const departmentStore = new DepartmentStore(
        "SuperMarket",
        "Shopping Avenue",
        [
            { name: "T-Shirt", price: 20, size: "M", color: "Blue" },
            { name: "Jeans", price: 50, size: "L", color: "Black" },
        ],
        [
            { name: "TV", price: 500, type: "televisions" },
            { name: "Washing Machine", price: 800, type: "bathroom" },
        ]
    );

    const shoppingMall = new ShoppingMall([bookstore, departmentStore]);

    return (
        <ScrollView style={{ backgroundColor: "yellow" }}>
            <SafeAreaView>
                {inMall ? (
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#66a3ff"
                                    : "#0066ff",
                            },
                            {
                                width: 200,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 12,
                                alignSelf: "center",
                                marginTop: 20,
                            },
                        ]}
                        onPress={() => {
                            shoppingMall.quitMall();
                            setInMall(false);
                            setInDepartmentStore(false);
                            setInBookStore(false);
                        }}
                    >
                        <Text style={styles.text}>Вийти з тц</Text>
                    </Pressable>
                ) : (
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#66a3ff"
                                    : "#0066ff",
                            },
                            {
                                width: 200,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 12,
                                alignSelf: "center",
                                marginTop: 20,
                            },
                        ]}
                        onPress={() => {
                            shoppingMall.enterMall();
                            setInMall(true);
                        }}
                    >
                        <Text style={styles.text}>Увійти в тц</Text>
                    </Pressable>
                )}
                {inMall ? (
                    <View>
                        {inBookStore ? (
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? "#66a3ff"
                                            : "#0066ff",
                                    },
                                    {
                                        width: 200,
                                        height: 40,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 12,
                                        alignSelf: "center",
                                        marginTop: 20,
                                    },
                                ]}
                                onPress={() => {
                                    bookstore.quitBookStore();
                                    setInBookStore(false);
                                }}
                            >
                                <Text style={styles.text}>
                                    Вийти з книгарні
                                </Text>
                            </Pressable>
                        ) : (
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? "#66a3ff"
                                            : "#0066ff",
                                    },
                                    {
                                        width: 200,
                                        height: 40,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 12,
                                        alignSelf: "center",
                                        marginTop: 20,
                                    },
                                ]}
                                onPress={() => {
                                    bookstore.sellProducts();
                                    setInBookStore(true);
                                    setInDepartmentStore(false);
                                }}
                            >
                                <Text style={styles.text}>
                                    Зайти в книгарню
                                </Text>
                            </Pressable>
                        )}
                        {inBookStore
                            ? bookstore
                                  .getBooks()
                                  .map((elem: any, index: number) => {
                                      return (
                                          <View
                                              key={index}
                                              style={{
                                                  alignSelf: "center",
                                                  paddingBottom: 20,
                                              }}
                                          >
                                              <Text style={styles.textProducts}>
                                                  Книга № {index + 1}
                                              </Text>
                                              <Text style={styles.textProducts}>
                                                  {elem.name}
                                              </Text>
                                              <Text style={styles.textProducts}>
                                                  {elem.genre}
                                              </Text>
                                              <Text style={styles.textProducts}>
                                                  {elem.price}
                                              </Text>
                                          </View>
                                      );
                                  })
                            : null}
                        {inDepartmentStore ? (
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? "#66a3ff"
                                            : "#0066ff",
                                    },
                                    {
                                        width: 200,
                                        height: 40,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 12,
                                        alignSelf: "center",
                                        marginTop: 20,
                                    },
                                ]}
                                onPress={() => {
                                    departmentStore.quitDepartmentStore();
                                    setInDepartmentStore(false);
                                }}
                            >
                                <Text style={styles.text}>
                                    Вийти з крамниці
                                </Text>
                            </Pressable>
                        ) : (
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? "#66a3ff"
                                            : "#0066ff",
                                    },
                                    {
                                        width: 200,
                                        height: 40,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 12,
                                        alignSelf: "center",
                                        marginTop: 20,
                                    },
                                ]}
                                onPress={() => {
                                    departmentStore.sellProducts();
                                    setInDepartmentStore(true);
                                    setInBookStore(false);
                                }}
                            >
                                <Text style={styles.text}>
                                    Зайти в крамницю
                                </Text>
                            </Pressable>
                        )}
                        {inDepartmentStore ? (
                            <View>
                                <Text style={styles.textProducts}>Одяг</Text>
                                {departmentStore
                                    .getClothing()
                                    .map((elem: any, index: number) => {
                                        return (
                                            <View
                                                key={index}
                                                style={{
                                                    alignSelf: "center",
                                                    paddingBottom: 20,
                                                }}
                                            >
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    Товар № {index + 1}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.name}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.price}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.size}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.color}
                                                </Text>
                                            </View>
                                        );
                                    })}
                                <Text style={styles.textProducts}>
                                    Побутова техніка
                                </Text>
                                {departmentStore
                                    .getTechnique()
                                    .map((elem: any, index: number) => {
                                        return (
                                            <View
                                                key={index}
                                                style={{
                                                    alignSelf: "center",
                                                    paddingBottom: 20,
                                                }}
                                            >
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    Товар № {index + 1}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.name}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.price}
                                                </Text>
                                                <Text
                                                    style={styles.textProducts}
                                                >
                                                    {elem.type}
                                                </Text>
                                            </View>
                                        );
                                    })}
                            </View>
                        ) : null}
                    </View>
                ) : null}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
        alignSelf: "center",
    },
    textProducts: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
    },
    button: {
        marginTop: 10,
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: 200,
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
        zIndex: 20,
    },
    dropdown2: {
        marginHorizontal: 10,
        marginBottom: 15,
        width: 200,
        zIndex: 10,
    },
});
