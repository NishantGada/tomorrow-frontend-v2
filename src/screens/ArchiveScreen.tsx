import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Spacing } from '../constants/spacing';

export default function ArchiveScreen() {
  const [archivedTasks, setArchivedTasks] = useState([
    {
      id: '5',
      title: 'Old task from last week',
      description: 'This was completed already',
      category: 'GREEN' as const,
      archivedDate: '2026-02-10',
    },
    {
      id: '6',
      title: 'Cancelled meeting',
      description: 'No longer needed',
      category: 'YELLOW' as const,
      archivedDate: '2026-02-12',
    },
  ]);

  const handleRestore = (taskId: string) => {
    console.log('Restore task:', taskId);
    setArchivedTasks(archivedTasks.filter(task => task.id !== taskId));
  };

  const handleDeletePermanently = (taskId: string) => {
    console.log('Delete permanently:', taskId);
    setArchivedTasks(archivedTasks.filter(task => task.id !== taskId));
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyEmoji}>📦</Text>
      <Text style={styles.emptyTitle}>No Archived Tasks</Text>
      <Text style={styles.emptyText}>
        Tasks you archive will appear here
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Archive</Text>
          <Text style={styles.subtitle}>
            {archivedTasks.length} {archivedTasks.length === 1 ? 'task' : 'tasks'}
          </Text>
        </View>

        {/* Archived Tasks or Empty State */}
        {archivedTasks.length === 0 ? (
          renderEmptyState()
        ) : (
          <View style={styles.taskList}>
            {archivedTasks.map((task) => (
              <View key={task.id} style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.taskInfo}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    {task.description && (
                      <Text style={styles.taskDescription}>{task.description}</Text>
                    )}
                    <Text style={styles.archivedDate}>
                      Archived {task.archivedDate}
                    </Text>
                  </View>

                  <View style={styles.actions}>
                    <Pressable 
                      style={styles.actionButton}
                      onPress={() => handleRestore(task.id)}
                    >
                      <Text style={styles.restoreText}>Restore</Text>
                    </Pressable>
                    
                    <Pressable 
                      style={[styles.actionButton, styles.deleteButton]}
                      onPress={() => handleDeletePermanently(task.id)}
                    >
                      <Text style={styles.deleteText}>Delete</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
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
    marginBottom: Spacing.lg,
  },
  title: {
    fontFamily: Typography.fontFamily.display,
    fontSize: Typography.fontSize.xxxl,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
  },
  
  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxxl,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: Spacing.md,
  },
  emptyTitle: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.xl,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  emptyText: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  
  // Task List
  taskList: {
    marginTop: Spacing.md,
  },
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: Spacing.radius.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
    marginBottom: Spacing.md,
    overflow: 'hidden',
  },
  cardContent: {
    padding: Spacing.cardPadding,
  },
  taskInfo: {
    marginBottom: Spacing.md,
  },
  taskTitle: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  taskDescription: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
    lineHeight: Typography.fontSize.sm * 1.5,
    marginBottom: Spacing.xs,
  },
  archivedDate: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.xs,
    color: Colors.text.tertiary,
  },
  
  // Actions
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    flex: 1,
    padding: Spacing.sm,
    borderRadius: Spacing.radius.sm,
    alignItems: 'center',
    backgroundColor: Colors.light.backgroundSecondary,
  },
  deleteButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  restoreText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.sm,
    color: Colors.primary,
  },
  deleteText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.sm,
    color: Colors.error,
  },
});