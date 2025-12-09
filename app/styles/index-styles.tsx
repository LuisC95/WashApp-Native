
import { serviceRegistration } from "@/components/statics-components/Service";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        screenContainer:
        {
            // padding: 0,
            margin: 0,
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: '#000E1F',
            // justifyContent: "center",
        },
        scrollContent: 
        {
            flexGrow: 1,
            justifyContent: 'space-between',
          },
        mainContainer:
        {
            flex: 1,
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            width: '95%',
            margin: 10,
            borderStyle: 'solid',
            borderWidth: 3,
            borderRadius: 50,
            borderColor: '#002E62',
        },
        statusBar:
        {
            backgroundColor: '#000E1F',


        },
        washRegistrationButton:
        {
            
        },
        carPicture:
        {
            display: 'flex',
            paddingTop: 0,
            marginTop: 0,
            height: '38.2%',
            width: '100%',
            backgroundColor: 'gray',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
        },
        homeOptions:
        {
            display: 'flex',
            flex: 1,
            // justifyContent: 'flex-start',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '62.8%',
            // backgroundColor: 'transparent',
            // borderStyle: 'solid',
            // borderWidth: 3,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            position: 'absolute',
            bottom: 0,
            paddingLeft: 20, 
            paddingRight: 20,
        },
        loyaltyProgram:
        {
            height: '9.6%',
            width: '100%',
            backgroundColor: '#002E62',
            justifyContent: 'flex-start',
            borderRadius: 50,
            padding: 2,
            textAlign: 'center',
            fontSize: 6,
        },
            loyaltyProgramPointsText:
            {
                fontSize: 15,
                fontFamily: 'helvetica-neue',
                marginLeft: 15,
                color: '#52CC52',
                // alignSelf: 'flex-start',
            },
            loyaltyProgramAvgText:
            {
                fontSize: 15,
                fontFamily: 'helvetica-neue',
                marginLeft: 15,
                color: '#92B0D1',
                marginBottom: 2,
                // alignSelf: 'flex-start',
            },
        washTracking:
        {
            display: 'flex',
            minHeight: '21.5%',
            width: '100%',
            backgroundColor: '#52CC52',
            borderRadius: 20,
            boxShadow: 'inset 6px 6px 21px #215221,inset -6px -6px 21px #83ff83',
            justifyContent: 'space-around',
        },
            washTrackingTitleText:
            {
                fontSize: 20,
                fontFamily: 'helvetica-neue',
                color: '#000E1F',
                textAlign: 'center',
                marginTop: 5,
            },
        servicesMenu:
        {
            height: '17.3%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#002E62',
        },
            servicesMenuExteriorButton:
            {
                height: 68,
                width: 68,
                backgroundColor: '#002E62',
                borderRadius: 50,
                margin: 2,
                padding: '1%',
                justifyContent: 'center',
            },
            serviceRegistrationButton:
            {
                height: 68,
                width: 68,
                backgroundColor: '#002E62',
                borderRadius: 50,
                margin: 2,
                padding: '1%',
                justifyContent: 'center',
            },
            servicesMenuFullServiceRegistrationButton:
            {
                height: 68,
                width: 68,
                backgroundColor: '#002E62',
                borderRadius: 50,
                margin: 2,
                padding: '1%',
                justifyContent: 'center',
            },
            servicesMenuUnlimitedButton:
            {
                height: 68,
                width: 68,
                backgroundColor: '#002E62',
                borderRadius: 50,
                margin: 2,
                padding: '1%',
                justifyContent: 'center',
            },
            ServicesMenuDetailingButton:
            {
                height: 68,
                width: 68,
                backgroundColor: '#002E62',
                borderRadius: 50,
                margin: 2,
                padding: '1%',
                justifyContent: 'center',
            },
            // servicesMenuFullServiceRegistrationButton:
            // {
            //     height: 68,
            //     width: 68,
            //     backgroundColor: '#002E62',
            //     borderRadius: 50,
            //     padding: '1%',
            //     margin: 2,
            // },
            // servicesMenuUnlimitedButton:
            // {
            //     height: 68,
            //     width: 68,
            //     backgroundColor: '#002E62',
            //     borderRadius: 50,
            //     padding: '1%',
            //     margin: 2,
            // },
            // ServicesMenuDetailingButton:
            // {
            //     height: 68,
            //     width: 68,
            //     backgroundColor: '#002E62',
            //     borderRadius: 50,
            //     padding: '1%',
            //     margin: 2,
            // },
        servicesInformation:
        {
            height: '40.6%',
            width: '100%',
            borderWidth: 3,
            borderColor: '#52CC52',
            borderRadius: 30,
            marginBottom: 20,
        },
        exteriorButtonLogo:
        {
            height: '70%',
            width: '70%',
            resizeMode: 'contain',
            alignSelf: 'center',   
        },
        // input: 
        // {
        //     // position: 'absolute',
        //     height: "100%",
        //     width: '80%',
        //     borderColor: 'gray',
        //     borderBottomWidth: 1,
        //     // paddingHorizontal: 10,
        //     borderRadius: 5,
        //     textAlign: 'center',
        // },
        // registrationButton: 
        // {
        //     backgroundColor: '#52CC52',
        //     boxShadow:  '8px 8px 25px #3b933b,-8px -8px 25px #69ff69',
        //     height: 50,
        //     width: 50,
        //     borderRadius: 25,
        // },
        // buttonText: 
        // {
        //     color: '#000E1F',
        //     textAlign: 'center',
        //     fontSize: 30,
        //     fontFamily: 'helvetica-neue',
        // },

          

    }
);