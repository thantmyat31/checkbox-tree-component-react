import React from 'react';
import CheckboxTree from './CheckboxTree';
import styles from './Checkbox.module.css';

export default function Checkbox({ checked, node, onChange, ...rest }) {
    // CHECK IF NODE HAS CHILDREN 
    const checkHasChild = (node) => {
        if(node.children) {
            return true;
        } else {
            return false;
        }
    }

    // CHECK IF EVERY ITEMS OF AN ARRAY IS IN ANOTHER ARRAY 
    const isIncludesEvery = (arr1, arr2) => {
        const includesEvery = arr1.every((item) => {
            return arr2.includes(item);
        });

        return includesEvery;
    }

    // CHECK IF SOME ITEMS OF AN ARRAY IS IN ANOTHER ARRAY 
    const isIncludesSome = (arr1, arr2) => {
        const includesSome = arr1.some((item) => {
            return arr2.includes(item);
        });

        return includesSome;
    }

    const singleCheckedToggle = (value, checked) => {
        if(checked.indexOf(value) === -1) onChange([...checked, value]);
        else {
            checked.splice(checked.indexOf(value), 1);
            onChange([...checked]);
        }
    }

    let valuesOfGetCheckedValuesLoop = [];
    const getCheckedValuesLoop = (items) => {
        for(let i = 0; i < items.length; i++) {
            if(items[i].children) {
                getCheckedValuesLoop(items[i].children);
            }
            else valuesOfGetCheckedValuesLoop.push(items[i].value);
        }
        return valuesOfGetCheckedValuesLoop;
    }
    
    const handleOnChange = (node, checked) => {
        const { value, children } = node;
        if(children) {
            let array = getCheckedValuesLoop(children);
    
            if(!isIncludesEvery(array, checked)) {
                let newArray = [...checked];
                
                array.forEach(item => {
                    if(newArray.indexOf(item) === -1) {
                        newArray.push(item);
                    }
                });
                onChange([...newArray]);
            } else {
                for(var i = 0; i < array.length; i++) {
                    checked.splice(checked.indexOf(array[i]), 1);
                }
                onChange([...checked]);
            }
        } else {
            singleCheckedToggle(value, checked);
        }
    }

    let valuesOfGetValuesLoop = [];
    const getValuesLoop = (items) => {
        for(let i = 0; i < items.length; i++) {
            if(items[i].children) {
                getValuesLoop(items[i].children);
            } else {
                valuesOfGetValuesLoop.push(items[i].value);
            }
        }
        return valuesOfGetValuesLoop;
    }

    const isChecked = (node, checked) => {
        if(node.children) {
            let values = node.children.reduce((accu, current) => current.children ? [...accu, ...getValuesLoop(current.children)] : [...accu, current.value],[]);
            if(isIncludesSome(values, checked)) {
                return true;
            }
            else return false;
        } 
        if(checked.indexOf(node.value) === -1) {
            return false;
        } else {
            return true;
        } 
    }

    return (
        <>
            <div className={styles.container}>
                {checkHasChild(node) && <span>+</span>}
                <input type="checkbox" value={node.value} checked={isChecked(node, checked)} onChange={() => handleOnChange(node, checked)} />
                {node.label}
            </div>
            {checkHasChild(node) && <CheckboxTree className={styles.child} nodes={node.children} checked={checked} onChecked={onChange} {...rest}  />}
        </>
    )
}
