import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import StaticsButton from "../components/statics-components/StaticsButton";
import WashRegistration from "@/components/user-components/wash-registration";
import { styles } from "./styles/index-styles";
import WashRegistrationButton from "@/components/user-components/wash-registration-button";

export default function Index() {
  return (
    <KeyboardAvoidingView
      style={styles.screenContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.screenContainer}>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#000E1F"
              translucent={true}
            />
            <View style={styles.mainContainer}>
              <View style={styles.carPicture}></View>
              <View style={styles.homeOptions}>
                <View style={styles.loyaltyProgram}>
                  <Text style={styles.loyaltyProgramPointsText}>
                    Loyalty points: 5765
                  </Text>
                  <Text style={styles.loyaltyProgramAvgText}>
                    Avg: 3 washes per week
                  </Text>
                  <StaticsButton />
                </View>
                <View style={styles.washTracking}>
                  <View>
                    <Text style={styles.washTrackingTitleText}>
                      Wash Tracking
                    </Text>
                  </View>
                  <View>
                    <WashRegistrationButton />
                  </View>
                </View>
                <View style={styles.servicesMenu}>
                  <TouchableOpacity
                    style={styles.servicesMenuExteriorButton}
                  >
                    <Image source={require('@/assets/images/exterior.png')} style={styles.exteriorButtonLogo} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.servicesMenuFullServiceRegistrationButton}
                  >
                    <Image source={require('@/assets/images/interior.png')} style={styles.exteriorButtonLogo} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.servicesMenuUnlimitedButton}
                  >
                    <Image source={require('@/assets/images/unlimited.png')} style={styles.exteriorButtonLogo} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.ServicesMenuDetailingButton}
                  ></TouchableOpacity>
                </View>
                <View style={styles.servicesInformation}></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
