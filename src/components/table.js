// tableTestData
import tableData from '../Data/tableData.json';
import { useState, useEffect } from 'react';

function TableComponent(props) {

    // set state
    const [sorting, setSorting] = useState({ key: "city", ascending: true });

    // method called every time the sort button is clicked
    // it will change the currentSort value to the next one
    const [currentData, setCurrentData] = useState(tableData);

    useEffect(() => {
        const currentDataCopy = [...currentData];
        // sort by String property
        const sortedCurrentData = currentDataCopy.sort((a, b) => {

            // To get the name key inside the Person object
            /*eslint eqeqeq:0*/
            if (sorting.key == "person") {
                return a.person.name.localeCompare(b.person.name)
            }
            else if(sorting.key === "joiningDate"){
                let D1=a[sorting.key].split('/').reverse().join('/');
                let D2=b[sorting.key].split('/').reverse().join('/');
                return D1.localeCompare(D2);
            }
            else {
                return a[sorting.key].localeCompare(b[sorting.key]);
            }
        });

        setCurrentData(sorting.ascending ? sortedCurrentData : sortedCurrentData.reverse());
        //react-hooks/exhaustive-deps
    }, [sorting]);

    // onClick function for sorting
    function applySorting(key, ascending) {
        setSorting({ key: key, ascending: ascending });
    }

    // destructuringI
    const { tableConfig } = props

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        {tableConfig.map((item, index) => {
                            return (
                                <th key={index}>

                                    {/* This is to change the title from Person to Name*/}
                                    {item.columnName === "person" ? "name" :
                                        item.columnName === "email" ? "email Address" :
                                            item.columnName === "joiningDate" ? "joining date" :
                                                item.columnName}

                                    {/*  This is for sorting icon and onclick*/}
                                    {item.sortVisible ? <img className='img' onClick={() => applySorting(item.columnName, !sorting.ascending)}
                                        src='/Assets/up-down.png' /> : ""}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tbody>
                    {/* used map function to show data one by one */}
                    {currentData.map((dataItem, index) => {
                        return (
                            <tr key={index}>
                                {tableConfig.map((item, index) => {
                                    {/* to get name data */ }
                                    return item.columnName === "person" ? (
                                        <td key={index} className='img-contain'>
                                            <img src={`/Assets/${dataItem.person.avatar}`} />
                                            <span>{dataItem.person.name}</span></td>
                                    ) :
                                        // To show email Id in link form
                                        item.columnName === "email" ?
                                            (<td key={index} className="email">
                                                <a href='#'>{dataItem.email}</a>
                                            </td>)
                                            :
                                            // to show other data
                                            (
                                                <td key={index}>{dataItem[item.columnName]}</td>)

                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;