import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../component/header/AppHeader'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'

const PrivacyPolicyScreen = () => {
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>

          <AppHeader
            title="Privacy policy"
            showDoubleTitle={false}
          />
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
            <Text style={styles.txtStyle}>
              # Privacy Policy

              **Last Updated:** [Date]

              At **[App Name]**, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our tiffin and home-cooked food delivery services.

              By using our application, you agree to the practices described in this Privacy Policy.

              ## 1. Information We Collect

              We may collect the following information when you use our application:

              ### Personal Information

              * Name
              * Mobile number
              * Email address
              * Profile information
              * Login and authentication information

              ### Delivery Information

              * Delivery address
              * Location details required for delivery
              * Saved addresses and delivery instructions

              ### Order Information

              * Tiffin/meal details
              * Orders and subscriptions
              * Order history
              * Payment and transaction details
              * Feedback, ratings, and reviews

              ### Device Information

              We may collect certain technical information such as:

              * Device type and model
              * Operating system
              * App version
              * IP address
              * Device identifiers
              * Crash and diagnostic information

              ## 2. How We Use Your Information

              We use your information to:

              * Create and manage your account
              * Process and deliver your orders
              * Manage subscriptions and meal plans
              * Communicate with you regarding your orders
              * Provide customer support
              * Process payments
              * Send order and service notifications
              * Improve our application and services
              * Prevent fraud, misuse, and unauthorized activities
              * Collect ratings and feedback
              * Comply with applicable legal requirements

              ## 3. Location Information

              We may request access to your location when it is necessary to provide delivery-related services.

              Your location may be used to:

              * Identify or confirm your delivery location
              * Help delivery personnel locate your address
              * Improve delivery coordination
              * Provide location-based services

              You can manage location permissions through your device settings. Some features may not work correctly if location access is disabled.

              ## 4. Payments

              Payments may be processed through third-party payment service providers.

              We do not intend to store your complete debit card, credit card, UPI, or banking credentials on our servers. Payment information may be handled directly by the applicable payment provider according to its privacy policy and security practices.

              ## 5. Sharing of Information

              We may share necessary information with trusted third parties only when required to provide our services.

              For example, information may be shared with:

              * Tiffin providers or kitchen partners for preparing and fulfilling your order
              * Delivery personnel for completing deliveries
              * Payment service providers for processing transactions
              * Cloud and hosting service providers
              * Analytics, crash reporting, or notification service providers
              * Government authorities when legally required

              We do not sell your personal information to third parties.

              ## 6. Notifications

              With your permission, we may send notifications related to:

              * Order status
              * Delivery updates
              * Subscription or meal-plan updates
              * Account-related activities
              * Important service announcements

              You can manage notification permissions through your device settings.

              ## 7. Reviews and Feedback

              If you submit a rating, review, or feedback, the information you provide may be used to improve our services.

              Where applicable, reviews or feedback may be visible to other users or service providers. Please avoid including sensitive personal information in public reviews.

              ## 8. Data Security

              We take reasonable technical and organizational measures to protect your information against unauthorized access, loss, misuse, alteration, or disclosure.

              However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of your information.

              ## 9. Data Retention

              We retain your personal information only for as long as necessary to:

              * Provide our services
              * Maintain your account
              * Complete transactions
              * Resolve disputes
              * Meet legal and regulatory requirements
              * Prevent fraud and misuse

              When information is no longer required, we may delete or anonymize it in accordance with applicable laws.

              ## 10. Your Choices and Rights

              Depending on applicable law, you may have the right to:

              * Access your personal information
              * Correct inaccurate information
              * Request deletion of your information
              * Withdraw certain permissions
              * Manage notification preferences
              * Request information about how your data is used

              You can contact us to exercise applicable privacy rights.

              ## 11. Children's Privacy

              Our services are not intended for children who are not legally permitted to use such services.

              We do not knowingly collect personal information from children without appropriate consent where required by applicable law.

              ## 12. Third-Party Services

              Our application may use third-party services for purposes such as:

              * Payment processing
              * Cloud storage
              * Authentication
              * Notifications
              * Analytics
              * Crash reporting
              * Maps and location services

              These third-party providers may process information according to their own privacy policies.

              ## 13. Changes to This Privacy Policy

              We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal requirements.

              Any updated version will be made available through the application or our website. The **Last Updated** date at the top of this policy will indicate when the policy was most recently changed.

              ## 14. Contact Us

              If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:

              **[App/Company Name]**

              **Email:** [Support Email]

              **Phone:** [Support Phone Number]

              **Address:** [Company Address]

              ---

              By using **[App Name]**, you acknowledge that you have read and understood this Privacy Policy.

            </Text>
          </ScrollView>
        </View>
      </SafeAreaFile>
    </View>
  )
}

export default PrivacyPolicyScreen

const styles = StyleSheet.create({
  txtStyle: {
    fontFamily: Fonts.Poppins.Regular,
    fontSize: 15,
    color: Colors.textSecondary
  }
})