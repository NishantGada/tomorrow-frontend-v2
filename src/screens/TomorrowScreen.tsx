import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Spacing } from '../constants/spacing';
import TaskCard from '../components/tasks/TaskCard';
import { mockSummary, mockTasks, mockUser } from '../utils/mockData';
import StreakCard from '../components/common/StreakCard';
import { useEffect, useState } from 'react';
import AISummary from '../components/common/AISummary';

export default function TomorrowScreen() {
  const [tasks, setTasks] = useState(mockTasks);
  const [summary, setSummary] = useState(mockSummary);

  // Auto-regenerate summary when tasks change
  useEffect(() => {
    // Simulate summary regeneration
    console.log('Tasks changed - regenerating summary...');
    setSummary(mockSummary + ' (Updated)');
  }, [tasks]);

  const handleDeleteTask = (taskId: string) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setTasks(tasks.filter(task => task.id !== taskId));
          },
        },
      ]
    );
  };

  const handleEditTask = (taskId: string) => {
    // For now, just log - we'll add edit modal later
    console.log('Edit task:', taskId);
    Alert.alert('Edit Task', 'Edit modal coming soon!');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Tomorrow</Text>
          <Text style={styles.subtitle}>February 16, 2026</Text>
        </View>

        {/* Streak Card */}
        <StreakCard
          currentStreak={mockUser.currentStreak}
          totalCompleted={mockUser.totalTasksCompleted}
        />

        {/* AI Summary - Remove onRefresh prop */}
        <AISummary summary={summary} />

        {/* Task List */}
        <View style={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onPress={() => handleEditTask(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </View>
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
  taskList: {
    marginTop: Spacing.md,
  },
});