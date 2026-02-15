import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import { Typography } from '../../constants/typography';
import { Spacing } from '../../constants/spacing';

type Task = {
  id: string;
  title: string;
  description: string;
  category: 'RED' | 'YELLOW' | 'GREEN';
  completed: boolean;
};

type Props = {
  task: Task;
  onPress?: () => void;
  onDelete?: () => void;
};

export default function TaskCard({ task, onPress, onDelete }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const getCategoryColor = () => {
    switch (task.category) {
      case 'RED': return Colors.red;
      case 'YELLOW': return Colors.yellow;
      case 'GREEN': return Colors.green;
    }
  };

  const getCategoryLabel = () => {
    switch (task.category) {
      case 'RED': return 'URGENT';
      case 'YELLOW': return 'IMPORTANT';
      case 'GREEN': return 'OPTIONAL';
    }
  };

  const handleEdit = () => {
    setMenuVisible(false);
    onPress?.();
  };

  const handleDelete = () => {
    setMenuVisible(false);
    onDelete?.();
  };

  return (
    <>
      <View style={styles.card}>
        <View style={[styles.accent, { backgroundColor: getCategoryColor() }]} />

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.leftSection}>
              <View style={styles.checkbox} />
              <View style={[styles.badge, { backgroundColor: `${getCategoryColor()}15` }]}>
                <Text style={[styles.badgeText, { color: getCategoryColor() }]}>
                  {getCategoryLabel()}
                </Text>
              </View>
            </View>

            {/* 3-Dot Menu Button */}
            <Pressable
              onPress={() => setMenuVisible(true)}
              style={styles.menuButton}
              hitSlop={8}
            >
              <Text style={styles.menuDots}>⋯</Text>
            </Pressable>
          </View>

          <Text style={styles.title}>{task.title}</Text>
          {task.description && (
            <Text style={styles.description}>{task.description}</Text>
          )}
        </View>
      </View>

      {/* Action Menu Bottom Sheet */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={styles.sheetOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <Pressable
            style={styles.sheetContainer}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.sheetHandle} />

            <View style={styles.sheetContent}>
              <Text style={styles.sheetTitle}>{task.title}</Text>

              <Pressable
                style={styles.sheetButton}
                onPress={handleEdit}
              >
                <Text style={styles.sheetButtonText}>✏️  Edit Task</Text>
              </Pressable>

              <Pressable
                style={[styles.sheetButton, styles.deleteButton]}
                onPress={handleDelete}
              >
                <Text style={[styles.sheetButtonText, { color: Colors.error }]}>
                  🗑️  Delete Task
                </Text>
              </Pressable>

              <Pressable
                style={styles.cancelButton}
                onPress={() => setMenuVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: Spacing.radius.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
    overflow: 'hidden',
  },
  accent: {
    height: 3,
    width: '100%',
  },
  content: {
    padding: Spacing.cardPadding,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // Add this
    marginBottom: Spacing.sm,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.light.border,
  },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: 10,
    letterSpacing: 0.5,
  },
  menuButton: {
    padding: Spacing.xs,
  },
  menuDots: {
    fontSize: 20,
    color: Colors.text.secondary,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  description: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
    lineHeight: Typography.fontSize.sm * 1.5,
  },

  // Bottom Sheet styles
  // Bottom Sheet styles
  sheetOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.7)',  // Darker, more opaque
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: Colors.light.card,
    borderTopLeftRadius: Spacing.radius.xl,  // Larger radius
    borderTopRightRadius: Spacing.radius.xl,
    paddingBottom: 40,  // More bottom padding for iPhone gesture bar
    ...Spacing.shadow.lg,  // Add shadow
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.light.border,
    borderRadius: Spacing.radius.full,
    alignSelf: 'center',
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  sheetContent: {
    paddingHorizontal: Spacing.screenHorizontal,
  },
  sheetTitle: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.lg,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  sheetButton: {
    backgroundColor: Colors.light.backgroundSecondary,
    padding: Spacing.md,
    borderRadius: Spacing.radius.md,
    marginBottom: Spacing.sm,
  },
  deleteButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  sheetButtonText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
    textAlign: 'center',
  },
  cancelButton: {
    padding: Spacing.md,
    marginTop: Spacing.sm,
  },
  cancelButtonText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
});