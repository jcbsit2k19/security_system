import React, { useEffect, useState } from 'react';
import Textbox from '../textbox/textbox';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

function searchInArray(arr, searchText) {
    return arr.filter(item => {
        return Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        );
    });
}

export function DataTable({ data, displaySetter, header, columns, children, pagination = true, search = true, loading = false }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(10);
    const [searchTerm, setSearchTerm] = React.useState('');

    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        if (data || searchTerm === '') {
            displaySetter(data.slice(0, pagination ? itemsPerPage : data?.length));
            setCurrentPage(1);
            setTotalPage(Math.ceil(data.length / itemsPerPage));
        }
        if (searchTerm) {
            displaySetter(searchInArray(data, searchTerm?.toLowerCase()));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, itemsPerPage, searchTerm]);

    const handleNext = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= totalPage) {
            setCurrentPage(nextPage);
            const startIndex = nextPage * itemsPerPage - itemsPerPage; // Calculate startIndex for the next page
            const endIndex = Math.min(nextPage * itemsPerPage, data?.length); // Calculate endIndex
            displaySetter(data.slice(startIndex, endIndex));
        }
    };

    const handlePrev = () => {
        const prevPage = currentPage - 1;
        if (prevPage >= 1) {
            setCurrentPage(prevPage);
            const startIndex = (prevPage - 1) * itemsPerPage; // Calculate startIndex for the previous page
            const endIndex = prevPage * itemsPerPage; // Calculate endIndex for the previous page
            displaySetter(data.slice(startIndex, endIndex));
        }
    };
    const handleFirst = () => {
        if (totalPage > 0) {
            const firstPage = 1;
            setCurrentPage(firstPage);
            const startIndex = (firstPage - 1) * itemsPerPage; // Calculate startIndex for the previous page
            const endIndex = firstPage * itemsPerPage; // Calculate endIndex for the previous page
            displaySetter(data?.slice(startIndex, endIndex));
        }


    };

    const handleLast = () => {
        const lastPage = totalPage;

        setCurrentPage(lastPage);
        const startIndex = (lastPage - 1) * itemsPerPage; // Calculate startIndex for the previous page
        const endIndex = lastPage * itemsPerPage; // Calculate endIndex for the previous page
        displaySetter(data.slice(startIndex, endIndex));

    };

    return (
        <div className="bg-white border shadow-lg mt-6 rounded-lg">
            <div className="flex items-center justify-between p-4 border-b bg-white rounded-t-lg">
                {header &&
                    <h3 className="text-lg flex-1 font-semibold text-gray-700">{header}</h3>
                }
                {search &&
                    <div className='shadow-md flex-1 rounded-lg'>
                        <Textbox
                            type="text"
                            placeholder="Search..."
                            className="border p-2 rounded-md"
                            value={searchTerm}
                            onChange={(value) => setSearchTerm(value)}
                            icon={<FaSearch className='text-slate-400' />}
                        />
                    </div>
                }

            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-300">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className="px-6 py-3 text-left text-nowrap text-xs font-medium text-gray-700 uppercase tracking-wider"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 10 }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: columns?.length }).map((_, colIndex) => (
                                        <td key={colIndex} className="p-2 whitespace-nowrap">
                                            <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (searchTerm && searchInArray(data, searchTerm).length === 0) || data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            children
                        )}
                    </tbody>
                </table>
            </div>

            {/* Updated Pagination Controls */}
            {pagination &&
                <div className="flex items-center space-x-2 justify-between p-2 border-t bg-gray-200 rounded-b-lg overflow-x-auto">
                    <div className="flex items-center justify-start">
                        <span className="text-sm text-gray-700 mr-2 font-semibold text-nowrap">Rows</span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            className="border p-2 rounded-md outline-none bg-white text-gray-700 shadow-lg"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={data?.length}>ALL</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={handleFirst}
                            className="flex items-center p-2 shadow-md bg-white text-slate-800 text-lg cursor-pointer rounded-md hover:bg-slate-800 hover:text-white  transition-colors"
                            disabled={currentPage === 1}
                        >
                            <FiChevronsLeft />
                        </button>
                        <button
                            onClick={handlePrev}
                            className="flex items-center p-2 shadow-md bg-white text-slate-800 text-lg cursor-pointer rounded-md hover:bg-slate-800 hover:text-white  transition-colors"
                            disabled={currentPage === 1}
                        >
                            <FiChevronLeft />
                        </button>
                        <span className="text-sm text-nowrap text-gray-700 font-semibold border bg-white p-2 rounded-lg shadow-md">
                            Page {currentPage} of {totalPage}
                        </span>
                        <button
                            onClick={handleNext}
                            className="flex items-center p-2 shadow-md bg-white text-slate-800 text-lg cursor-pointer rounded-md hover:bg-slate-800 hover:text-white  transition-colors"
                            disabled={currentPage === totalPage}
                        >
                            <FiChevronRight />
                        </button>
                        <button
                            onClick={handleLast}
                            className="flex items-center p-2 shadow-md bg-white text-slate-800 text-lg cursor-pointer rounded-md hover:bg-slate-800 hover:text-white  transition-colors"
                            disabled={currentPage === totalPage}
                        >
                            <FiChevronsRight />
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export function TableRow({ children, rowIndex }) {
    return (
        <tr key={rowIndex} className={`cursor-pointer ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-green-100`}>
            {children}
        </tr>
    );
}

export function TableData({ children, wrapText = false }) {
    return (
        <td className={`px-6 py-4 text-xs text-gray-700 ${wrapText ? "" : "text-nowrap"}`}>
            {children}
        </td>
    );
}
