import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const TaskPanel = () => {
    const [pendingTasks, setPendingTasks] = useState([]);
    const [pendingTasksCount, setPendingTasksCount] = useState(0);

    // Function to fetch pending tasks from Firestore
    const fetchPendingTasks = async () => {
        try {
            const tasksRef = firebase.firestore().collection('tasks');
            const querySnapshot = await tasksRef.where('status', '==', 'pending').get();
            const tasks = querySnapshot.docs.map((doc) => doc.data());
            setPendingTasks(tasks);
            setPendingTasksCount(tasks.length);
        } catch (error) {
            // Handle error
            console.error('Error fetching pending tasks:', error);
        }
    };

    // Function to handle task approval
    const handleApproveTask = async (taskId) => {
        try {
            const taskRef = firebase.firestore().collection('tasks').doc(taskId);
            await taskRef.update({ status: 'approved' });
            // After approval, fetch updated pending tasks
            fetchPendingTasks();
        } catch (error) {
            // Handle error
            console.error('Error approving task:', error);
        }
    };

    // Function to handle task denial
    const handleDenyTask = async (taskId) => {
        try {
            const taskRef = firebase.firestore().collection('tasks').doc(taskId);
            await taskRef.update({ status: 'denied' });
            // After denial, fetch updated pending tasks
            fetchPendingTasks();
        } catch (error) {
            // Handle error
            console.error('Error denying task:', error);
        }
    };

    // Fetch pending tasks on component mount
    useEffect(() => {

