import React from 'react';

export default function NormalCard({ children, topSpace = false }) {
    return (
        <div className={`bg-white p-4 rounded-lg shadow-md ${topSpace ? 'mt-6' : ""}`}>{children}</div>
    );
}
