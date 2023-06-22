import React from "react";
import { bubbleSort } from "./sortingAlgorithms/bubbleSort";
import { insertionSort } from "./sortingAlgorithms/insertionSort";
import { mergeSort } from "./sortingAlgorithms/mergeSort";
import { quickSort } from "./sortingAlgorithms/quickSort";
import { selectionSort } from "./sortingAlgorithms/selectionSort";
const {useState, useEffect} = React;
const first = "#b949ff";
const second = "#49aba1";
function App() {
    const [algorithms, setAlgorithms] = useState(0);
    const algos = ["Bubble Sort", "Insertion Sort", "Selection Sort", "Quick Sort", "Merge Sort"];
    const [array, setArray] = useState([]);
    const [reset, setReset] = useState(false);
    useEffect(() => {
        let list = [];
        for (let i = 0; i <= 230; i++) {
            list.push(getRandom(5, 680));
        }
        setArray(list);
    }, [reset]);
    const timer = 3;
    const [sorting, setSorting] = useState(false);
    function bubbleSortVisualizer() {
        if (reset) return;
        const animations = bubbleSort(array);
        const arrayBars = document.getElementsByClassName("bar");
        for (let i = 0; i < animations.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? first : second;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * timer);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timer);
            }
          }
    }
    function insertionSortVisualizer() {
        const animations = insertionSort(array);
        const arrayBars = document.getElementsByClassName('bar');
        for (let i = 0; i < animations.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? first : second;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * timer);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timer);
            }
          }
    }
    function selectionSortVisualizer() {
        const animations = selectionSort(array);
        const arrayBars = document.getElementsByClassName("bar");
        for (let i = 0; i < animations.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? first : second;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * timer);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timer);
            }
          }
    }
    function quickSortVisualizer() {
        const animations = quickSort(array);
        const arrayBars = document.getElementsByClassName("bar");
        for (let i = 0; i < animations.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? first : second;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * timer);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timer);
            }
        }
    }
    function mergeSortVisualizer() {
        const animations = mergeSort(array);
        const arrayBars = document.getElementsByClassName("bar");
        for (let i = 0; i < animations.length; i++) {
            const colorChange = i % 3 !== 2;
            if (colorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? first : second;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * timer);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timer);
            }
        }
    }
    function sortingAlgo() {
        if (algorithms === 0) {
            bubbleSortVisualizer();
        } else if (algorithms === 1) {
            insertionSortVisualizer();
        } else if (algorithms === 2) {
            selectionSortVisualizer();
        } else if (algorithms === 3) {
            quickSortVisualizer();
        } else {
            mergeSortVisualizer();
        }
    }
    useEffect(() => {
        document.title = algos[algorithms] + " | Sorting Visualizer";
    }, [algorithms])
    return (
        <main>
            <header>
                <div className="logo" onClick={() => window.location.href = "/"}>
                    <div className="sorting">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                    <p>Sorting Visualizer</p>
                </div>
                <div className="options">
                    <div className="sorting">
                        {
                            algos.map((data, index) => {
                                return (
                                    <button style={{color: sorting ? index === algorithms ? first : "#d83939" : "", background: sorting ? "unset" : "", cursor: sorting ? "no-drop" : ""}} disabled={sorting ? true : false} id={index === algorithms ? "check" : ""} key={data} onClick={() => setAlgorithms(index)}>{data}</button>
                                )
                            })
                        }
                    </div>
                    <div className="sort">
                        <button onMouseDown={() => setSorting(true)} onClick={sortingAlgo}><svg aria-hidden="true" data-prefix="fas" data-icon="play-circle"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" alt=""><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg> Sort</button>
                    </div>
                </div>
            </header>
            <div className="sorting-area">
                {
                    array.map((data, index) => {
                        return (
                            <div key={index} className="bar" style={{height: `${data}px`}}>
                            </div>
                        )
                    })
                }
            </div>
            <footer>
                <p>Made by <a href="https://pagnavathsok.com" target={"_blank"}>Pagnavath Sok</a>.</p>
            </footer>
        </main>
    )
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export default App;