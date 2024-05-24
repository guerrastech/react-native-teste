import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/foto.png")} style={styles.image} />
      <Text style={styles.header}>Gabriel Guerra</Text>
      <Text style={styles.subheader}>
      Estudante de Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
         Olá, sou Gabriel Guerra, tenho 20 anos, sou Estudante de Análise e Desenvolvimento de Sistemas
        e eu moro na cidade de Recife - PE.
      </Text>
      <Text style={styles.paragraph}>
      Tecnologias com as quais tive experiência:
      </Text>
      <Text style={styles.listItem}>
      • Bibliotecas e Frameworks: React, Angular, Flutter.
      </Text>
      <Text style={styles.listItem}>
      • Linguagens de programação: TypeScript, JavaScript, C, C#.
      </Text>
      <Text style={styles.listItem}>• Banco de dados: MySQL, MongoDB.</Text>
      <Text style={styles.listItem}>• Ferramentas de desenvolvimento: Git, GitHub.</Text>
      <Text style={styles.paragraph}>
          Atualmente estou querendo entrar na area de ciencia de dados, seja através de um
         estágio ou outra posição,mas estou não me limito a esta área e estou sempre disposto a aprender.
      </Text>
      <Text style={styles.paragraph}>
      Você pode conferir meu portfólio em:  {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/guerrastech")}
        >
          github.com/guerrastech
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
      Residência Tecnológica no Porto Digital
      </Text>
      <Text style={styles.paragraph}>• Março de 2023 - presente</Text>
      <Text style={styles.paragraph}>
      • Durante minha graduação em Análise e Desenvolvimento de Sistemas, participo de
         projetos para empresas reais a cada semestre.
      </Text>
      <Text style={styles.subheader}>Especialista em campus DIO na DIO</Text>
      <Text style={styles.paragraph}>• Março de 2024 - abril de 2024</Text>
      <Text style={styles.paragraph}>
      • Fui um dos escolhidos para a sétima edição do programa,
         que visa formar líderes universitários através de mentoria e práticas
         atividades, preparando os alunos para inspirar a próxima geração de tecnologia
         talento.
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
      Graduação em Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
      Faculdade Secac Pernambuco, mar. 2023 - presente.
      </Text>
      <Text style={styles.subheader}>Treinamento Acelerado em Programação</Text>
      <Text style={styles.paragraph}>
      Softex Pernambuco, jun. 2023 - jan. 2024.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});