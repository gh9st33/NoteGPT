import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { taskData } from '../../App';

const TaskChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let completedTasks = taskData.filter(task => task.completed).length;
        let incompleteTasks = taskData.length - completedTasks;

        setChartData({
            labels: ['Completed Tasks', 'Incomplete Tasks'],
            datasets: [
                {
                    data: [completedTasks, incompleteTasks],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        });
    };

    useEffect(() => {
        chart();
    }, [taskData]);

    return (
        <div className="chart">
            <Pie data={chartData} options={{
                responsive: true,
                title: { text: "Task Status", display: true },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10,
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                }
            }} />
        </div>
    );
};

export default TaskChart;