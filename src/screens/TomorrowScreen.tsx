import { StyleSheet, Text, View, ScrollView, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Spacing } from '../constants/spacing';
import TaskCard from '../components/tasks/TaskCard';
import { mockSummary, mockTasks, mockUser } from '../utils/mockData';
import StreakCard from '../components/common/StreakCard';
import { useEffect, useState } from 'react';
import AISummary from '../components/common/AISummary';
import { LinearGradient } from 'expo-linear-gradient';
import AddTaskModal from '../components/tasks/AddTaskModal';

export default function TomorrowScreen() {
  const [tasks, setTasks] = useState(mockTasks);
  const [summary, setSummary] = useState(mockSummary);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<typeof mockTasks[0] | null>(null);

  const handleAddTask = (taskData: { title: string; description: string; category: 'RED' | 'YELLOW' | 'GREEN' }) => {
    if (editingTask) {
      // Edit existing task
      setTasks(tasks.map(task =>
        task.id === editingTask.id
          ? { ...task, ...taskData }
          : task
      ));
    } else {
      // Add new task
      const task = {
        id: Date.now().toString(),
        ...taskData,
        status: 'ACTIVE' as const,
        completed: false,
      };
      setTasks([...tasks, task]);
    }
    setIsAddModalVisible(false);
    setEditingTask(null);
  };

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
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setEditingTask(task);
      setIsAddModalVisible(true);
    }
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

      <Pressable
        style={styles.fab}
        onPress={() => setIsAddModalVisible(true)}
      >
        <LinearGradient
          colors={Colors.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fabGradient}
        >
          <Text style={styles.fabIcon}>+</Text>
        </LinearGradient>
      </Pressable>

      <AddTaskModal
        visible={isAddModalVisible}
        onClose={() => {
          setIsAddModalVisible(false);
          setEditingTask(null);
        }}
        onSave={handleAddTask}
        editTask={editingTask}
      />
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

  // FAB styles
  fab: {
    position: 'absolute',
    bottom: 20,
    right: Spacing.screenHorizontal,
    borderRadius: Spacing.radius.full,
    ...Spacing.shadow.lg,
  },
  fabGradient: {
    width: 60,
    height: 60,
    borderRadius: Spacing.radius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    fontSize: 32,
    color: Colors.text.inverse,
    fontWeight: '300',
  },
});