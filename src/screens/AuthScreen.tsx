import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Spacing } from '../constants/spacing';

type Props = {
  onAuthenticated: () => void;
};

export default function AuthScreen({ onAuthenticated }: Props) {
  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
    // Mock authentication - just navigate
    onAuthenticated();
  };

  const handleAppleSignIn = () => {
    console.log('Apple Sign In');
    onAuthenticated();
  };

  const handleEmailSignIn = () => {
    console.log('Email Sign In');
    onAuthenticated();
  };

  return (
    <LinearGradient
      colors={Colors.gradients.primary}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          {/* Hero Section */}
          <View style={styles.hero}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>✨</Text>
            </View>
            <Text style={styles.appName}>TOMORROW</Text>
            <Text style={styles.tagline}>Plan today. Conquer tomorrow.</Text>
          </View>

          {/* Auth Buttons */}
          <View style={styles.authContainer}>
            <Pressable style={styles.authButton} onPress={handleGoogleSignIn}>
              <Text style={styles.authButtonIcon}>G</Text>
              <Text style={styles.authButtonText}>Continue with Google</Text>
            </Pressable>

            <Pressable style={styles.authButton} onPress={handleAppleSignIn}>
              <Text style={styles.authButtonIcon}></Text>
              <Text style={styles.authButtonText}>Continue with Apple</Text>
            </Pressable>

            <Pressable style={styles.authButton} onPress={handleEmailSignIn}>
              <Text style={styles.authButtonIcon}>✉</Text>
              <Text style={styles.authButtonText}>Continue with Email</Text>
            </Pressable>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing, you agree to our{'\n'}
              <Text style={styles.footerLink}>Terms of Service</Text>
              {' & '}
              <Text style={styles.footerLink}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.screenHorizontal,
    justifyContent: 'space-between',
    paddingVertical: Spacing.xl,
  },
  
  // Hero
  hero: {
    alignItems: 'center',
    marginTop: Spacing.xxxl,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  logo: {
    fontSize: 48,
  },
  appName: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.display,
    color: Colors.text.inverse,
    letterSpacing: Typography.letterSpacing.wider,
    marginBottom: Spacing.sm,
  },
  tagline: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.lg,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  
  // Auth Buttons
  authContainer: {
    gap: Spacing.md,
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.card,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: Spacing.radius.md,
    gap: Spacing.sm,
    ...Spacing.shadow.md,
  },
  authButtonIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  authButtonText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
  },
  
  // Footer
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.sm,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: Typography.fontSize.sm * 1.6,
  },
  footerLink: {
    fontFamily: Typography.fontFamily.semibold,
    textDecorationLine: 'underline',
  },
});