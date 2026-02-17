import { StyleSheet, Text, View, Modal, Pressable, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { Colors } from '../../constants/colors';
import { Typography } from '../../constants/typography';
import { Spacing } from '../../constants/spacing';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (task: { title: string; description: string; category: 'RED' | 'YELLOW' | 'GREEN' }) => void;
  editTask?: {
    id: string;
    title: string;
    description: string;
    category: 'RED' | 'YELLOW' | 'GREEN';
  } | null;
};

export default function AddTaskModal({ visible, onClose, onSave, editTask }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'RED' | 'YELLOW' | 'GREEN'>('YELLOW');

  // Pre-fill form when editing
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setCategory(editTask.category);
    } else {
      // Reset when opening for new task
      setTitle('');
      setDescription('');
      setCategory('YELLOW');
    }
  }, [editTask, visible]);

  const handleSave = () => {
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      description: description.trim(),
      category,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setCategory('YELLOW');
  };

  const getCategoryColor = (cat: 'RED' | 'YELLOW' | 'GREEN') => {
    switch (cat) {
      case 'RED': return Colors.red;
      case 'YELLOW': return Colors.yellow;
      case 'GREEN': return Colors.green;
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Handle */}
          <View style={styles.handle} />

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{editTask ? 'Edit Task' : 'New Task'}</Text>
            <Pressable onPress={onClose} hitSlop={8}>
              <Text style={styles.closeButton}>✕</Text>
            </Pressable>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Title Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Title *</Text>
              <TextInput
                style={styles.input}
                placeholder="What needs to be done?"
                placeholderTextColor={Colors.text.tertiary}
                value={title}
                onChangeText={setTitle}
                autoFocus
              />
            </View>

            {/* Description Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description (Optional)</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Add more details..."
                placeholderTextColor={Colors.text.tertiary}
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            {/* Category Selector */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Priority</Text>
              <View style={styles.categoryContainer}>
                <Pressable
                  style={[
                    styles.categoryOption,
                    category === 'RED' && styles.categoryOptionActive,
                  ]}
                  onPress={() => setCategory('RED')}
                >
                  <View style={[styles.categoryDot, { backgroundColor: Colors.red }]} />
                  <View style={styles.categoryInfo}>
                    <Text style={styles.categoryTitle}>Urgent</Text>
                    <Text style={styles.categoryDesc}>Must do today</Text>
                  </View>
                  {category === 'RED' && <Text style={styles.checkmark}>✓</Text>}
                </Pressable>

                <Pressable
                  style={[
                    styles.categoryOption,
                    category === 'YELLOW' && styles.categoryOptionActive,
                  ]}
                  onPress={() => setCategory('YELLOW')}
                >
                  <View style={[styles.categoryDot, { backgroundColor: Colors.yellow }]} />
                  <View style={styles.categoryInfo}>
                    <Text style={styles.categoryTitle}>Important</Text>
                    <Text style={styles.categoryDesc}>Should do soon</Text>
                  </View>
                  {category === 'YELLOW' && <Text style={styles.checkmark}>✓</Text>}
                </Pressable>

                <Pressable
                  style={[
                    styles.categoryOption,
                    category === 'GREEN' && styles.categoryOptionActive,
                  ]}
                  onPress={() => setCategory('GREEN')}
                >
                  <View style={[styles.categoryDot, { backgroundColor: Colors.green }]} />
                  <View style={styles.categoryInfo}>
                    <Text style={styles.categoryTitle}>Optional</Text>
                    <Text style={styles.categoryDesc}>Nice to have</Text>
                  </View>
                  {category === 'GREEN' && <Text style={styles.checkmark}>✓</Text>}
                </Pressable>
              </View>
            </View>
          </ScrollView>

          {/* Footer Actions */}
          <View style={styles.footer}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>

            <Pressable 
              style={[styles.button, styles.saveButton, !title.trim() && styles.saveButtonDisabled]}
              onPress={handleSave}
              disabled={!title.trim()}
            >
              <Text style={styles.saveButtonText}>{editTask ? 'Save Changes' : 'Add Task'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: Colors.light.card,
    borderTopLeftRadius: Spacing.radius.xl,
    borderTopRightRadius: Spacing.radius.xl,
    height: '90%',
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.light.border,
    borderRadius: Spacing.radius.full,
    alignSelf: 'center',
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenHorizontal,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  title: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize.xl,
    color: Colors.text.primary,
  },
  closeButton: {
    fontSize: 24,
    color: Colors.text.secondary,
  },
  content: {
    paddingHorizontal: Spacing.screenHorizontal,
    paddingTop: Spacing.lg,
  },
  inputGroup: {
    marginBottom: Spacing.lg,
  },
  label: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.sm,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.light.backgroundSecondary,
    borderRadius: Spacing.radius.md,
    padding: Spacing.md,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  textArea: {
    minHeight: 100,
    paddingTop: Spacing.md,
  },

  categoryContainer: {
    gap: Spacing.sm,
  },
  categoryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    backgroundColor: Colors.light.backgroundSecondary,
    borderRadius: Spacing.radius.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryOptionActive: {
    backgroundColor: Colors.light.card,
    borderColor: Colors.primary,
  },
  categoryDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: Spacing.md,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.primary,
    marginBottom: 2,
  },
  categoryDesc: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.xs,
    color: Colors.text.secondary,
  },
  checkmark: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    gap: Spacing.md,
    paddingHorizontal: Spacing.screenHorizontal,
    paddingTop: Spacing.lg,
  },
  button: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: Spacing.radius.md,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: Colors.light.backgroundSecondary,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  cancelButtonText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
  },
  saveButton: {
    backgroundColor: Colors.primary,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonText: {
    fontFamily: Typography.fontFamily.semibold,
    fontSize: Typography.fontSize.base,
    color: Colors.text.inverse,
  },
});