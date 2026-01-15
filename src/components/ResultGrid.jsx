import React from 'react';
import SolutionCard from './SolutionCard';

const ResultGrid = ({ solutions }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            paddingBottom: '4rem'
        }}>
            {solutions.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
            ))}
        </div>
    );
};

export default ResultGrid;
