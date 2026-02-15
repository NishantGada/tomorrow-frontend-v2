import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Spacing } from '../constants/spacing';
import { mockUser } from '../utils/mockData';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Profile Picture */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {mockUser.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Pressable style={styles.editAvatarButton}>
              <Text style={styles.editAvatarText}>Edit</Text>
            </Pressable>
          </View>
          
          <Text style={styles.name}>{mockUser.name}</Text>
          <Text style={styles.email}>nishant@example.com</Text>
        </View>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Your Statistics</Text>
          
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{mockUser.currentStreak}</Text>
              <Text style={styles.statLabel}>Current Streak</Text>
            </View>
            
            <View style={styles.statDivider} />
            
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>23</Text>
              <Text style={styles.statLabel}>Longest Streak</Text>
            </View>
            
            <View style={styles.statDivider} />
            
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{mockUser.totalTasksCompleted}</Text>
              <Text style={styles.statLabel}>Total Completed</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </Pressable>
          
          <Pressable style={[styles.actionButton, styles.logoutButton]}>
            <Text style={[styles.actionButtonText, { color: Colors.error }]}>
              Logout
            </Text>
          </Pressable>
        </View>

        {/* App Info */}
        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: Spacing.screenHorizontal,
  },
  header: {
    marginBottom: Spacing.xl,
  },
  title: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxxl,
    color: Colors.text.primary,
  },
  
  // Profile Section
  profileSection: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxxl,
    color: Colors.text.inverse,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.light.card,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: Spacing.radius.sm,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  editAvatarText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.xs,
    color: Colors.primary,
  },
  name: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize.xxl,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  email: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
  },
  
  // Stats Card
  statsCard: {
    backgroundColor: Colors.light.card,
    borderRadius: Spacing.radius.md,
    padding: Spacing.cardPadding,
    borderWidth: 1,
    borderColor: Colors.light.border,
    marginBottom: Spacing.xl,
  },
  statsTitle: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.lg,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: Spacing.sm,
  },
  statNumber: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxl,
    color: Colors.primary,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.xs,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: Typography.fontSize.xs * 1.4,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.light.border,
  },
  
  // Actions
  actions: {
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  actionButton: {
    backgroundColor: Colors.light.card,
    padding: Spacing.md,
    borderRadius: Spacing.radius.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
    alignItems: 'center',
  },
  logoutButton: {
    borderColor: Colors.error,
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
  },
  actionButtonText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
  },
  
  // Version
  version: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginTop: Spacing.lg,
  },
});