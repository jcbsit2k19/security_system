import React, { useState } from 'react';

export default function TurnStyleReportPage() {
    const [selectedReportType, setSelectedReportType] = useState('');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [isGenerating, setIsGenerating] = useState(false);
    const [reportUrl, setReportUrl] = useState('');

    const handleReportTypeChange = (e) => {
        setSelectedReportType(e.target.value);
    };

    const handleDateChange = (e) => {
        setDateRange({
            ...dateRange,
            [e.target.name]: e.target.value
        });
    };

    const handleGenerateReport = () => {
        setIsGenerating(true);
        // Simulate report generation
        setTimeout(() => {
            setIsGenerating(false);
            setReportUrl('https://example.com/report.pdf'); // Mock URL for generated report
        }, 2000);
    };

    return (
        <div className="p-6">
            <div className="container mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-blue-500">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Generate Report</h2>
                    <div className="mb-4">
                        <label htmlFor="reportType" className="text-md font-semibold text-gray-700 mb-4">Report Type</label>
                        <select
                            id="reportType"
                            value={selectedReportType}
                            onChange={handleReportTypeChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm outline-none p-2"
                        >
                            <option value="">Select a report type</option>
                            <option value="daily">Daily Report</option>
                            <option value="weekly">Weekly Report</option>
                            <option value="monthly">Monthly Report</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="startDate" className="text-md font-semibold text-gray-700 mb-4">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="start"
                            value={dateRange.start}
                            onChange={handleDateChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm outline-none p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="endDate" className="text-md font-semibold text-gray-700 mb-4">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="end"
                            value={dateRange.end}
                            onChange={handleDateChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm outline-none p-2"
                        />
                    </div>

                    <button
                        onClick={handleGenerateReport}
                        disabled={isGenerating}
                        className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${isGenerating ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}
                    >
                        {isGenerating ? 'Generating Report...' : 'Generate Report'}
                    </button>
                </div>

                {reportUrl && (
                    <div className="bg-white p-4 rounded-lg shadow-md mt-6 border-l-4 border-blue-500">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Report Download</h2>
                        <p className="text-gray-600 mb-4">Your report is ready. You can download it using the link below:</p>
                        <a
                            href={reportUrl}
                            download
                            className="text-blue-500 hover:underline"
                        >
                            Download Report
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
