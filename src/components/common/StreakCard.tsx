import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { Typography } from '../../constants/typography';
import { Spacing } from '../../constants/spacing';

type Props = {
  currentStreak: number;
  totalCompleted: number;
};

export default function StreakCard({ currentStreak, totalCompleted }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.streakSection}>
          <Text style={styles.emoji}>🔥</Text>
          <View>
            <Text style={styles.number}>{currentStreak}</Text>
            <Text style={styles.label}>Day Streak</Text>
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.statsSection}>
          <Text style={styles.statNumber}>{totalCompleted}</Text>
          <Text style={styles.label}>Completed</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: Spacing.radius.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
    marginBottom: Spacing.lg,
  },
  content: {
    padding: Spacing.cardPadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  emoji: {
    fontSize: 28,
  },
  number: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxl,
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  label: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.xs,
    color: Colors.text.secondary,
    marginTop: -2,
  },
  divider: {
    width: 1,
    height: 36,
    backgroundColor: Colors.light.border,
    marginHorizontal: Spacing.md,
  },
  statsSection: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xl,
    color: Colors.text.primary,
    letterSpacing: -0.5,
  },
});