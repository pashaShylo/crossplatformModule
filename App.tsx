import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    SafeAreaView,
    TextInput,
} from "react-native";
import Header from "./header";
import { useState } from "react";
import calculateExp from "./calculateExp";
interface Worker {
    surname: string;
    enrollDate: Date;
    salaryPerHour: number;
    workedHours: number;
}
export default function App() {
    const surnameValidation = (surname: string) => {
        if (surname.length > 3) {
            return true;
        } else {
            alert("Surname must be longer than 3 letters");
            return false;
        }
    };
    const dateValidation = (input: string) => {
        const pattern = /^\d{2}\.\d{2}\.\d{4}$/;

        if (pattern.test(input)) {
            const parts = input.split(".");
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);

            if (
                day >= 1 &&
                day <= 31 &&
                month >= 1 &&
                month <= 12 &&
                year >= 1900 &&
                year <= 2023
            ) {
                return true;
            } else {
                alert("Input value is invalid. Date values are out of range.");
                return false;
            }
        } else {
            alert("Input value is invalid. Date format should be dd.mm.yyyy.");
            return false;
        }
    };
    const salaryValidation = (salary: number) => {
        if (isNaN(salary)) {
            alert("Salary must be int");
            return false;
        }
        if (salary <= 0) {
            alert("Salary must be more than 0");
            return false;
        }
        return true;
    };
    const workedHoursValidation = (hours: number) => {
        if (isNaN(hours)) {
            alert("Hours must be int");
            return false;
        }
        if (hours <= 0) {
            alert("Worked hours must be more than 0");
            return false;
        }
        return true;
    };
    const [workers, setWorkers] = useState<Worker[]>([]);
    const [surname, setSurname] = useState("");
    const [enrollDate, setEnrollDate] = useState("");
    const [salaryPerHour, setSalaryPerHour] = useState(0);
    const [workedHours, setWorkedHours] = useState(0);

    return (
        <SafeAreaView style={{ backgroundColor: "#82ccdd", flex: 1 }}>
            <ScrollView>
                <View>
                    <Header />
                    <Text style={{ ...styles.text, paddingTop: 20 }}>
                        Прізвище
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSurname(text)}
                    ></TextInput>
                    <Text style={styles.text}>Дата зарахування на роботу</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setEnrollDate(text)}
                    ></TextInput>
                    <Text style={styles.text}>Годинна заробітна плата</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) =>
                            setSalaryPerHour(parseInt(text))
                        }
                    ></TextInput>
                    <Text style={styles.text}>
                        Кількість відпрацьованих годин
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setWorkedHours(parseInt(text))}
                    ></TextInput>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#66a3ff"
                                    : "#0066ff",
                            },
                            styles.button,
                        ]}
                        onPress={() => {
                            if (
                                dateValidation(enrollDate) &&
                                surnameValidation(surname) &&
                                salaryValidation(salaryPerHour) &&
                                workedHoursValidation(workedHours)
                            ) {
                                const date = enrollDate.split(".");

                                const day = parseInt(date[0]);
                                const month = parseInt(date[1]) - 1;
                                const year = parseInt(date[2]);
                                const newWorker: Worker = {
                                    surname: surname,
                                    enrollDate: new Date(year, month, day),
                                    salaryPerHour: salaryPerHour,
                                    workedHours: workedHours,
                                };
                                setWorkers([...workers, newWorker]);
                            }
                        }}
                    >
                        <Text style={styles.text}>Click</Text>
                    </Pressable>
                    {workers.map((elem: Worker, index: number) => {
                        return (
                            <View key={index}>
                                <Text style={styles.text}>
                                    Прізвище: {elem.surname}
                                </Text>
                                <Text style={styles.text}>
                                    Дата зарахування на роботу:{" "}
                                    {elem.enrollDate.getDate() +
                                        "." +
                                        (elem.enrollDate.getMonth() + 1) +
                                        "." +
                                        elem.enrollDate.getFullYear()}
                                </Text>
                                <Text style={styles.text}>
                                    Годинна заробітна плата:{" "}
                                    {elem.salaryPerHour}
                                </Text>
                                <Text style={styles.text}>
                                    Кількість відпрацьованих годин:{" "}
                                    {elem.workedHours}
                                </Text>
                                <Text style={styles.text}>
                                    Стаж{" "}
                                    {calculateExp(elem.enrollDate) + " днів"}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        margin: 15,
        fontSize: 20,
        padding: 5,
    },
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
    },
    button: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: 130,
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
