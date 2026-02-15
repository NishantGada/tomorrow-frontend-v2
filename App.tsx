import { StyleSheet, Text, View, ScrollView, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { Colors } from './src/constants/colors';
import { Typography } from './src/constants/typography';
import { Spacing } from './src/constants/spacing';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    SpaceGrotesk_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={[Colors.light.background, Colors.light.backgroundSecondary]}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView 
            style={styles.scroll} 
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {/* Hero Section */}
            <View style={styles.hero}>
              <LinearGradient
                colors={Colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.heroGradient}
              >
                <Text style={styles.heroTitle}>TOMORROW</Text>
                <Text style={styles.heroSubtitle}>Your future, simplified</Text>
              </LinearGradient>
            </View>

            {/* Streak Card - Glass Morphism */}
            <View style={styles.streakCard}>
              <LinearGradient
                colors={['rgba(99, 102, 241, 0.1)', 'rgba(139, 92, 246, 0.05)']}
                style={styles.streakGradient}
              >
                <View style={styles.streakContent}>
                  <View style={styles.streakLeft}>
                    <Text style={styles.streakEmoji}>🔥</Text>
                    <View>
                      <Text style={styles.streakNumber}>15</Text>
                      <Text style={styles.streakLabel}>Day Streak</Text>
                    </View>
                  </View>
                  <View style={styles.streakDivider} />
                  <View style={styles.streakRight}>
                    <Text style={styles.streakStat}>127</Text>
                    <Text style={styles.streakLabel}>Tasks Done</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>

            {/* Section Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Tomorrow's Focus</Text>
              <Text style={styles.sectionSubtitle}>3 tasks · Feb 15</Text>
            </View>

            {/* RED Task - Urgent */}
            <Pressable style={styles.taskCardWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#FEF2F2']}
                style={styles.taskCard}
              >
                <View style={[styles.taskAccent, { backgroundColor: Colors.red }]} />
                <View style={styles.taskContent}>
                  <View style={styles.taskHeader}>
                    <View style={styles.checkbox} />
                    <View style={styles.taskBadge}>
                      <Text style={[styles.badgeText, { color: Colors.red }]}>URGENT</Text>
                    </View>
                  </View>
                  <Text style={styles.taskTitle}>Finish presentation deck</Text>
                  <Text style={styles.taskDescription}>
                    Complete slides for Q1 review meeting
                  </Text>
                  <View style={styles.taskFooter}>
                    <View style={[styles.glowDot, { backgroundColor: Colors.red }]} />
                    <Text style={styles.taskTime}>Due in 2 hours</Text>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>

            {/* YELLOW Task - Important */}
            <Pressable style={styles.taskCardWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#FFFBEB']}
                style={styles.taskCard}
              >
                <View style={[styles.taskAccent, { backgroundColor: Colors.yellow }]} />
                <View style={styles.taskContent}>
                  <View style={styles.taskHeader}>
                    <View style={styles.checkbox} />
                    <View style={[styles.taskBadge, { backgroundColor: 'rgba(245, 158, 11, 0.1)' }]}>
                      <Text style={[styles.badgeText, { color: Colors.yellow }]}>IMPORTANT</Text>
                    </View>
                  </View>
                  <Text style={styles.taskTitle}>Review pull requests</Text>
                  <Text style={styles.taskDescription}>
                    Check and approve pending code reviews
                  </Text>
                  <View style={styles.taskFooter}>
                    <View style={[styles.glowDot, { backgroundColor: Colors.yellow }]} />
                    <Text style={styles.taskTime}>Tomorrow morning</Text>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>

            {/* GREEN Task - Optional */}
            <Pressable style={styles.taskCardWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#F0FDF4']}
                style={styles.taskCard}
              >
                <View style={[styles.taskAccent, { backgroundColor: Colors.green }]} />
                <View style={styles.taskContent}>
                  <View style={styles.taskHeader}>
                    <View style={styles.checkbox} />
                    <View style={[styles.taskBadge, { backgroundColor: 'rgba(16, 185, 129, 0.1)' }]}>
                      <Text style={[styles.badgeText, { color: Colors.green }]}>OPTIONAL</Text>
                    </View>
                  </View>
                  <Text style={styles.taskTitle}>Read design article</Text>
                  <Text style={styles.taskDescription}>
                    Check out latest trends in mobile UI
                  </Text>
                  <View style={styles.taskFooter}>
                    <View style={[styles.glowDot, { backgroundColor: Colors.green }]} />
                    <Text style={styles.taskTime}>Flexible</Text>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>

            {/* AI Summary Card */}
            <View style={styles.aiCard}>
              <LinearGradient
                colors={Colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.aiGradient}
              >
                <Text style={styles.aiIcon}>✨</Text>
                <Text style={styles.aiTitle}>Your AI Insight</Text>
                <Text style={styles.aiText}>
                  "Tomorrow looks focused! Tackle your presentation first thing when energy is high. You've got this! 💪"
                </Text>
              </LinearGradient>
            </View>

            {/* Action Button */}
            <Pressable style={styles.fabWrapper}>
              <LinearGradient
                colors={Colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.fab}
              >
                <Text style={styles.fabIcon}>+</Text>
              </LinearGradient>
            </Pressable>

            <View style={{ height: 40 }} />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: Spacing.screenHorizontal,
  },
  
  // Hero Section
  hero: {
    marginBottom: Spacing.xl,
    marginTop: Spacing.md,
  },
  heroGradient: {
    padding: Spacing.xl,
    borderRadius: Spacing.radius.xl,
    ...Spacing.shadow.lg,
  },
  heroTitle: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.display,
    color: Colors.text.inverse,
    letterSpacing: Typography.letterSpacing.wider,
    marginBottom: Spacing.xs,
  },
  heroSubtitle: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.lg,
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: Typography.letterSpacing.wide,
  },
  
  // Streak Card
  streakCard: {
    marginBottom: Spacing.xl,
    borderRadius: Spacing.radius.lg,
    overflow: 'hidden',
    ...Spacing.shadow.md,
  },
  streakGradient: {
    padding: Spacing.cardPaddingLg,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: Spacing.radius.lg,
  },
  streakContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  streakEmoji: {
    fontSize: 32,
  },
  streakNumber: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxxl,
    color: Colors.primary,
    letterSpacing: Typography.letterSpacing.tight,
  },
  streakLabel: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
    marginTop: -4,
  },
  streakDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.light.border,
    marginHorizontal: Spacing.lg,
  },
  streakRight: {
    alignItems: 'center',
  },
  streakStat: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxl,
    color: Colors.text.primary,
  },
  
  // Section Header
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize.xxl,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  sectionSubtitle: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
  },
  
  // Task Cards
  taskCardWrapper: {
    marginBottom: Spacing.md,
  },
  taskCard: {
    borderRadius: Spacing.radius.lg,
    overflow: 'hidden',
    ...Spacing.shadow.sm,
    borderWidth: 1,
    borderColor: Colors.light.borderLight,
  },
  taskAccent: {
    height: 4,
    width: '100%',
  },
  taskContent: {
    padding: Spacing.cardPaddingLg,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.light.border,
    backgroundColor: Colors.light.card,
  },
  taskBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: Spacing.radius.sm,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  badgeText: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize.xs,
    letterSpacing: Typography.letterSpacing.wide,
  },
  taskTitle: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.lg,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  taskDescription: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.relaxed,
    marginBottom: Spacing.md,
  },
  taskFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  glowDot: {
    width: 8,
    height: 8,
    borderRadius: Spacing.radius.full,
  },
  taskTime: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.tertiary,
  },
  
  // AI Card
  aiCard: {
    marginVertical: Spacing.xl,
    borderRadius: Spacing.radius.lg,
    overflow: 'hidden',
    ...Spacing.shadow.md,
  },
  aiGradient: {
    padding: Spacing.cardPaddingLg,
  },
  aiIcon: {
    fontSize: 32,
    marginBottom: Spacing.sm,
  },
  aiTitle: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize.lg,
    color: Colors.text.inverse,
    marginBottom: Spacing.sm,
  },
  aiText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: Typography.fontSize.base * Typography.lineHeight.relaxed,
  },
  
  // FAB
  fabWrapper: {
    alignSelf: 'center',
    marginTop: Spacing.lg,
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: Spacing.radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    ...Spacing.shadow.lg,
  },
  fabIcon: {
    fontSize: 32,
    color: Colors.text.inverse,
    fontWeight: '300',
  },
});