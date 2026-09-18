import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../component/header/AppHeader'
import { CommonStyle } from '../../helper/uiComponent/CommonStyle'
import SafeAreaFile from '../../helper/uiComponent/SafeAreaFile'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../../theme/Colors'

const TermsAndConditionsScreen = () => {
  return (
    <View style={CommonStyle.appBackground}>
      <SafeAreaFile>
        <View style={CommonStyle.appBorderSpacing}>

          <AppHeader
            title="Terms and conditions"
            showDoubleTitle={false}
          />
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
            <Text style={styles.txtStyle}>
              Terms & Conditions

              Last Updated: [Date]

              Welcome to [App Name]. These Terms & Conditions govern your use of our application and the tiffin, meal, subscription, delivery, and related services provided through the application.

              By creating an account or using our application, you agree to these Terms & Conditions. If you do not agree with these terms, please do not use the application.

              1. About Our Service

              [App Name] is a platform that allows users to discover, order, subscribe to, and manage tiffin and home-cooked meal services from participating kitchens or food providers.

              We may provide services including:

              Tiffin and meal ordering
              Meal subscriptions and plans
              Home delivery
              Order tracking and updates
              Ratings and reviews
              Communication between customers and service providers
              2. User Account

              To use certain features, you may need to create an account.

              You agree to:

              Provide accurate and complete information
              Keep your account information updated
              Keep your login credentials secure
              Not share your account with unauthorized persons
              Notify us if you suspect unauthorized access to your account

              You are responsible for activities performed through your account.

              3. Orders and Subscriptions

              When placing an order or subscribing to a meal plan, you agree to provide accurate information, including your delivery address and contact details.

              Once an order is placed:

              Order details should be reviewed carefully before confirmation.
              Availability may depend on the selected kitchen or service provider.
              Meal availability, menus, and prices may change.
              Subscription services may have specific start dates, schedules, and terms.
              An order may be unavailable if the selected provider cannot fulfill it.

              We reserve the right to cancel or modify an order when necessary due to availability, operational issues, incorrect information, or other legitimate reasons.

              4. Pricing and Payments

              Prices displayed in the application may include applicable taxes, delivery charges, or other fees where specified.

              You agree to pay the amount shown at checkout using the available payment methods.

              Payments may be processed through third-party payment providers. We do not control the payment processing systems operated by these providers.

              We reserve the right to change prices, fees, or meal plans at any time. Changes will generally apply to new orders or subscriptions unless otherwise stated.

              5. Delivery

              Delivery times displayed in the application are estimates and may be affected by:

              Traffic
              Weather conditions
              Kitchen preparation time
              Delivery availability
              Incorrect or incomplete delivery information
              Other circumstances outside our reasonable control

              Customers are responsible for providing an accurate and accessible delivery address.

              If a delivery cannot be completed because the customer is unavailable or the address/instructions are incorrect, additional delivery arrangements or charges may apply where applicable.

              6. Food and Meal Information

              Food is prepared by participating kitchens or food providers.

              Information about meals, including ingredients, portion sizes, dietary information, vegetarian/non-vegetarian classification, and allergens, should be reviewed carefully before placing an order.

              If you have a food allergy or dietary restriction, you should contact the relevant food provider before ordering.

              We are not responsible for reactions resulting from ingredients or allergies where the relevant information was provided by the food provider or otherwise made available to the customer.

              7. Cancellation and Refunds

              Cancellation and refund eligibility may depend on the type and status of the order or subscription.

              Where applicable:

              Orders may only be cancelled within the permitted cancellation period.
              Refunds may be issued according to the applicable cancellation/refund policy.
              Once food preparation or delivery has started, cancellation may not be possible.
              Refund processing times may depend on the payment provider.

              Any specific refund policy displayed during checkout or within the application will apply to the relevant transaction.

              8. User Reviews and Ratings

              Users may be able to submit ratings, reviews, and feedback.

              You agree that your submissions must:

              Be truthful and based on your actual experience
              Not contain abusive, threatening, or offensive content
              Not contain false or misleading information
              Not violate another person's privacy
              Not contain illegal or harmful content

              We reserve the right to remove content that violates these Terms & Conditions.

              9. Prohibited Activities

              You agree not to:

              Use the application for unlawful purposes
              Provide false or misleading information
              Create fraudulent accounts or orders
              Attempt to gain unauthorized access to the application
              Interfere with the application's operation
              Use automated systems to abuse or overload the service
              Upload malicious software or harmful content
              Misuse promotional offers or referral programs
              Impersonate another person or business
              10. Kitchen and Service Providers

              Participating kitchens or food providers are responsible for preparing the meals and fulfilling their applicable service obligations.

              Kitchen providers are expected to provide accurate information about their meals, pricing, availability, and services.

              We may take reasonable action against providers who violate applicable platform rules or service requirements.

              11. Intellectual Property

              All content and materials available through the application, including:

              Logos
              Designs
              Graphics
              Text
              Images
              Software
              Trademarks
              Application features

              may be owned by or licensed to [App/Company Name].

              You may not copy, reproduce, modify, distribute, sell, or commercially exploit our content without prior written permission.

              12. Third-Party Services

              Our application may integrate with third-party services such as payment providers, maps, authentication providers, cloud services, analytics services, and notification services.

              Your use of these services may also be subject to the terms and policies of the respective third-party providers.

              13. Service Availability

              We aim to keep the application and services available, but we do not guarantee uninterrupted or error-free operation.

              The application may occasionally be unavailable due to:

              Maintenance
              Technical problems
              Updates
              Network issues
              Security incidents
              Circumstances beyond our reasonable control
              14. Limitation of Liability

              To the extent permitted by applicable law, [App/Company Name] will not be responsible for losses or damages resulting from circumstances beyond our reasonable control.

              We are not responsible for:

              Delays caused by external circumstances
              Incorrect information provided by users
              Problems caused by third-party services
              Service interruptions caused by technical or network issues
              Issues resulting from unauthorized use of a user's account

              Nothing in these Terms limits any rights or protections that cannot legally be excluded under applicable law.

              15. Account Suspension or Termination

              We may suspend or terminate an account if we reasonably believe that a user:

              Violates these Terms & Conditions
              Engages in fraudulent activity
              Misuses the application
              Creates a security risk
              Uses the service for unlawful purposes

              Users may also stop using the application at any time.

              16. Privacy

              Your use of the application is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.

              17. Changes to These Terms

              We may update these Terms & Conditions from time to time.

              Updated terms will be made available through the application or our website. The Last Updated date will indicate when the terms were most recently changed.

              Your continued use of the application after updated terms become effective means that you acknowledge the updated Terms & Conditions.

              18. Governing Law

              These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India.

              Any disputes will be subject to the jurisdiction of the appropriate courts as applicable.

              19. Contact Us

              If you have any questions regarding these Terms & Conditions, please contact us:

              [App/Company Name]

              Email: [Support Email]

              Phone: [Support Phone Number]

              Address: [Company Address]

              By using [App Name], you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </Text>

          </ScrollView>
        </View>
      </SafeAreaFile>
      <Text>PrivacyPolicyScreen</Text>
    </View>
  )
}

export default TermsAndConditionsScreen

const styles = StyleSheet.create({
  txtStyle: {
    fontFamily: Fonts.Poppins.Regular,
    fontSize: 15,
    color: Colors.textSecondary
  }
})