import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  AccountToAccountScreens,
  Bankinfo,
  BankingScreens,
  BillPayment,
  Bitcoin,
  BitcoinBuy,
  BitcoinSell,
  BusinessServicesScreen1,
  BusinessServicesScreen10,
  BusinessServicesScreen2,
  BusinessServicesScreen3,
  BusinessServicesScreen4,
  BusinessServicesScreen5,
  BusinessServicesScreen6,
  BusinessServicesScreen7,
  BusinessServicesScreen8,
  BusinessServicesScreen9,
  CardsScreens,
  Cases,
  Code,
  Contract,
  ConvertCoins,
  CreatAccount,
  Create,
  CrowdFunding,
  CrowdFundingCategory,
  CrowdFundingDetials,
  CrowdFundingNewCampaign,
  CrowdFundingOne,
  CrowdFundingTwo,
  Ecommerce,
  EcommerceCart,
  EcommerceDetials,
  EducationScreens,
  EducationScreens2,
  EducationScreens3,
  EducationScreens4,
  EducationScreens5,
  EducationScreens6,
  EducationScreens7,
  EntertainmentScreeen1,
  EntertainmentScreeen2,
  EntertainmentScreeen3,
  EntertainmentScreeen4,
  EntertainmentScreeen5,
  EntertainmentScreeen6,
  FirstLoan,
  FreelencerAttachfilesScreens,
  FreelencerScreens,
  FreelencerScreens10,
  FreelencerScreens3,
  FreelencerScreens4,
  FreelencerScreens5,
  FreelencerScreens6,
  FreelencerScreens7,
  FreelencerScreens8,
  FreelencerScreens9,
  Government,
  HealthAnalyticsScreen,
  Home,
  Innovation,
  InsuranceScreens1,
  InsuranceScreens2,
  InsuranceScreens3,
  InsuranceScreens4,
  InsuranceScreens5,
  InsuranceScreens6,
  InsuranceScreens7,
  InvestingScreens1,
  InvestingTesla,
  InvestingTop,
  Landing, Legal, LegalDoc, LoanCalculator, LoanGuide, LoanPayment, LoanRepayment, LoanRequest, LoansScreens, Login, LogisticScreens, LogisticScreens2, LogisticScreens3, LogisticScreens4, LogisticScreens5, LogisticScreens6, LogisticScreens7, LogisticScreens8, LogisticScreens9, MedicalScreens1, MedicalScreens10, MedicalScreens2, MedicalScreens3, MedicalScreens4, MedicalScreens5, MedicalScreens6, MedicalScreens7, MedicalScreens8, MedicalScreens9, MentorShip, MentorShip1, MentorShipEnter2, MentorShipEnter3, MentorShipEnter4, MentorShipInvestor1, MentorShipInvestor2, MyAccountList, MyAccountPage1, MyAccountPage2, MyAccountPage3, ParametersScreens, PayCardScreens, PaymentsScreens, PinScreens, RealChart, RealDetails, RealEstate, RepayCardsScreen, SME, Schedpayment, SchedulePayment, Screen1, Signup, Startup, TelecomScreens1, TelecomScreens2, TelecomScreens3, TelecomScreens4, TelecomScreens5, TelecomScreens6, TelecomScreens7, TotalBalanceScreen, TotalBalanceScreen2, TransferScreens, UnlockCards, Venture, Worldpaycard, Worldpaycard2, YourLoans,
} from "../../Screens";
import { createStackNavigator } from "@react-navigation/stack";
import SMES from "../../Screens/SMEScreen/SMEScreens";
import Reg from "../../Screens/SMEScreen/RegisterLawyer/RegisterLawyer";
import BitcoinBuy1 from "../../Screens/RealEstate/BitcoinBuy1";

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          navigationOptions={{ gesturesEnabled: false }}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Code" component={Code} />
          <Stack.Screen name="Home" component={Home} />


          <Stack.Screen name="SMEHome" component={SMES} />
          <Stack.Screen name="SME" component={SME} />
          <Stack.Screen name="Venture" component={Venture} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Bankinfo" component={Bankinfo} />
          <Stack.Screen name="Contract" component={Contract} />
          <Stack.Screen name="Cases" component={Cases} />
          <Stack.Screen name="Legal" component={Legal} />
          <Stack.Screen name="LegalDoc" component={LegalDoc} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Government" component={Government} />
          <Stack.Screen name="Register" component={Reg} />
          <Stack.Screen name="ConvertCoins" component={ConvertCoins} />
          
          <Stack.Screen name="Banking" component={BankingScreens} />
          <Stack.Screen name="Cards" component={CardsScreens} />
          <Stack.Screen name="Pin" component={PinScreens} />
          <Stack.Screen name="Param" component={ParametersScreens} />
          <Stack.Screen name="Paycard" component={PayCardScreens} />
          <Stack.Screen name="wpaycard" component={Worldpaycard} />
          <Stack.Screen name="wpaycard2" component={Worldpaycard2} />
          <Stack.Screen name="page1" component={MyAccountPage1} />
          <Stack.Screen name="page2" component={MyAccountPage2} />
          <Stack.Screen name="page3" component={MyAccountPage3} />
          <Stack.Screen name="List" component={MyAccountList} />
          <Stack.Screen name="CreateA" component={CreatAccount} />
          <Stack.Screen name="Unblockcards" component={UnlockCards} />
          <Stack.Screen name="TransferScreens" component={TransferScreens} />
          <Stack.Screen name="AccountToAccountScreens" component={AccountToAccountScreens} />
          <Stack.Screen name="PaymentsScreens" component={PaymentsScreens} />
          <Stack.Screen name="BillPayment" component={BillPayment} />
          <Stack.Screen name="SchedulePayment" component={SchedulePayment} />
          {/* <Stack.Screen name="ConvertCoins" component={ConvertCoins} /> */}
          <Stack.Screen name="RepayCardsScreen" component={RepayCardsScreen} />
          <Stack.Screen name="YourLoans" component={YourLoans} />
          <Stack.Screen name="LoanPayment" component={LoanPayment} />
          <Stack.Screen name="Schedpayment" component={Schedpayment} />
          <Stack.Screen name="TotalBalanceScreen" component={TotalBalanceScreen} />
          <Stack.Screen name="TotalBalanceScreen2" component={TotalBalanceScreen2} />
          <Stack.Screen name="FirstLoan" component={FirstLoan} />
          <Stack.Screen name="LoanGuide" component={LoanGuide} />
          <Stack.Screen name="LoanRequest" component={LoanRequest} />
          <Stack.Screen name="LoansScreens" component={LoansScreens} />
          <Stack.Screen name="LoanCalculator" component={LoanCalculator} />
          <Stack.Screen name="LoanRepayment" component={LoanRepayment} />
          
          <Stack.Screen name="CrowdFundingOne" component={CrowdFundingOne} />
          <Stack.Screen name="CrowdFundingTwo" component={CrowdFundingTwo} />
          <Stack.Screen name="CrowdFundingNewCampaign" component={CrowdFundingNewCampaign} />
          <Stack.Screen name="CrowdFunding" component={CrowdFunding} />
          <Stack.Screen name="CrowdFundingCategory" component={CrowdFundingCategory} />
          <Stack.Screen name="CrowdFundingDetials" component={CrowdFundingDetials} />

          <Stack.Screen name="BusinessServicesScreen6" component={BusinessServicesScreen6} />
          <Stack.Screen name="BusinessServicesScreen7" component={BusinessServicesScreen7} />
          <Stack.Screen name="BusinessServicesScreen8" component={BusinessServicesScreen8} />
          <Stack.Screen name="BusinessServicesScreen9" component={BusinessServicesScreen9} />
          <Stack.Screen name="BusinessServicesScreen10" component={BusinessServicesScreen10} />
          <Stack.Screen name="BusinessServicesScreen1" component={BusinessServicesScreen1} />
          <Stack.Screen name="BusinessServicesScreen2" component={BusinessServicesScreen2} />
          <Stack.Screen name="BusinessServicesScreen3" component={BusinessServicesScreen3} />
          <Stack.Screen name="BusinessServicesScreen4" component={BusinessServicesScreen4} />
          <Stack.Screen name="BusinessServicesScreen5" component={BusinessServicesScreen5} />

          <Stack.Screen name="EducationScreens" component={EducationScreens} />
          <Stack.Screen name="EducationScreens2" component={EducationScreens2} />
          <Stack.Screen name="EducationScreens3" component={EducationScreens3} />
          <Stack.Screen name="EducationScreens4" component={EducationScreens4} />
          <Stack.Screen name="EducationScreens5" component={EducationScreens5} />
          <Stack.Screen name="EducationScreens6" component={EducationScreens6} />
          <Stack.Screen name="EducationScreens7" component={EducationScreens7} />

          <Stack.Screen name="FreelencerScreens" component={FreelencerScreens} />
          <Stack.Screen name="FreelencerAttachfilesScreens" component={FreelencerAttachfilesScreens} />
          <Stack.Screen name="FreelencerScreens3" component={FreelencerScreens3} />
          <Stack.Screen name="FreelencerScreens4" component={FreelencerScreens4} />
          <Stack.Screen name="FreelencerScreens5" component={FreelencerScreens5} />
          <Stack.Screen name="FreelencerScreens6" component={FreelencerScreens6} />
          <Stack.Screen name="FreelencerScreens7" component={FreelencerScreens7} />
          <Stack.Screen name="FreelencerScreens8" component={FreelencerScreens8} />
          <Stack.Screen name="FreelencerScreens9" component={FreelencerScreens9} />
          <Stack.Screen name="FreelencerScreens10" component={FreelencerScreens10} />

          <Stack.Screen name="InsuranceScreens1" component={InsuranceScreens1} />
          <Stack.Screen name="InsuranceScreens2" component={InsuranceScreens2} />
          <Stack.Screen name="InsuranceScreens3" component={InsuranceScreens3} />
          <Stack.Screen name="InsuranceScreens4" component={InsuranceScreens4} />
          <Stack.Screen name="InsuranceScreens5" component={InsuranceScreens5} />
          <Stack.Screen name="InsuranceScreens6" component={InsuranceScreens6} />
          <Stack.Screen name="InsuranceScreens7" component={InsuranceScreens7} />

          <Stack.Screen name="InvestingScreens1" component={InvestingScreens1} />
          <Stack.Screen name="InvestingTop" component={InvestingTop} />
          <Stack.Screen name="InvestingTesla" component={InvestingTesla} />
          {/* <Stack.Screen name="Bitcoin" component={Bitcoin} />
          <Stack.Screen name="BitcoinBuy" component={BitcoinBuy} /> */}


          <Stack.Screen name="LogisticScreens" component={LogisticScreens} />
          <Stack.Screen name="LogisticScreens2" component={LogisticScreens2} />
          <Stack.Screen name="LogisticScreens3" component={LogisticScreens3} />
          <Stack.Screen name="LogisticScreens4" component={LogisticScreens4} />
          <Stack.Screen name="LogisticScreens5" component={LogisticScreens5} />
          <Stack.Screen name="LogisticScreens6" component={LogisticScreens6} />
          <Stack.Screen name="LogisticScreens7" component={LogisticScreens7} />
          <Stack.Screen name="LogisticScreens8" component={LogisticScreens8} />
          <Stack.Screen name="LogisticScreens9" component={LogisticScreens9} />
          




          <Stack.Screen name="TelecomScreens1" component={TelecomScreens1} />
          <Stack.Screen name="TelecomScreens2" component={TelecomScreens2} />
          <Stack.Screen name="TelecomScreens3" component={TelecomScreens3} />
          <Stack.Screen name="TelecomScreens4" component={TelecomScreens4} />
          <Stack.Screen name="TelecomScreens5" component={TelecomScreens5} />
          <Stack.Screen name="TelecomScreens6" component={TelecomScreens6} />
          <Stack.Screen name="TelecomScreens7" component={TelecomScreens7} />

          <Stack.Screen name="Ecommerce" component={Ecommerce} />
          <Stack.Screen name="EcommerceDetials" component={EcommerceDetials} />
          <Stack.Screen name="EcommerceCart" component={EcommerceCart} />

          <Stack.Screen name="MedicalScreens1" component={MedicalScreens1} />
          <Stack.Screen name="MedicalScreens2" component={MedicalScreens2} />
          <Stack.Screen name="MedicalScreens3" component={MedicalScreens3} />
          <Stack.Screen name="MedicalScreens4" component={MedicalScreens4} />
          <Stack.Screen name="MedicalScreens5" component={MedicalScreens5} />
          <Stack.Screen name="MedicalScreens6" component={MedicalScreens6} />
          <Stack.Screen name="MedicalScreens7" component={MedicalScreens7} />
          <Stack.Screen name="MedicalScreens8" component={MedicalScreens8} />
          <Stack.Screen name="MedicalScreens9" component={MedicalScreens9} />
          <Stack.Screen name="MedicalScreens10" component={MedicalScreens10} />

          <Stack.Screen name="RealEstate" component={RealEstate} />
          <Stack.Screen name="RealChart" component={RealChart} />
          <Stack.Screen name="RealDetails" component={RealDetails} />
          {/* <Stack.Screen name="BitcoinSell" component={BitcoinSell} />
          <Stack.Screen name="BitcoinBuy1" component={BitcoinBuy1} /> */}

          <Stack.Screen name="Innovation" component={Innovation} />
          <Stack.Screen name="MentorShip" component={MentorShip} />
          <Stack.Screen name="MentorShip1" component={MentorShip1} />
          <Stack.Screen name="MentorShipEnter2" component={MentorShipEnter2} />
          <Stack.Screen name="MentorShipEnter3" component={MentorShipEnter3} />
          <Stack.Screen name="MentorShipEnter4" component={MentorShipEnter4} />
          <Stack.Screen name="MentorShipInvestor1" component={MentorShipInvestor1} />
          <Stack.Screen name="MentorShipInvestor2" component={MentorShipInvestor2} />

          <Stack.Screen name="HealthAnalyticsScreen" component={HealthAnalyticsScreen} />

          <Stack.Screen name="EntertainmentScreeen1" component={EntertainmentScreeen1} />
          <Stack.Screen name="EntertainmentScreeen2" component={EntertainmentScreeen2} />
          <Stack.Screen name="EntertainmentScreeen3" component={EntertainmentScreeen3} />
          <Stack.Screen name="EntertainmentScreeen4" component={EntertainmentScreeen4} />
          <Stack.Screen name="EntertainmentScreeen5" component={EntertainmentScreeen5} />
          <Stack.Screen name="EntertainmentScreeen6" component={EntertainmentScreeen6} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
