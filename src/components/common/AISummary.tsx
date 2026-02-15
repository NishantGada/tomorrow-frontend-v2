import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/colors';
import { Typography } from '../../constants/typography';
import { Spacing } from '../../constants/spacing';

type Props = {
  summary: string;
};

export default function AISummary({ summary }: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Text style={styles.icon}>✨</Text>
          <Text style={styles.title}>Your AI Insight</Text>
        </View>

        <Text style={styles.summary}>{summary}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
    borderRadius: Spacing.radius.md,
    overflow: 'hidden',
    ...Spacing.shadow.md,
  },
  gradient: {
    padding: Spacing.cardPadding,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.xs,
  },
  icon: {
    fontSize: 20,
  },
  title: {
    flex: 1,
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.inverse,
  },
  refreshIcon: {
    fontSize: 20,
    color: Colors.text.inverse,
    fontWeight: 'bold',
  },
  summary: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: Typography.fontSize.base * 1.6,
  },
});