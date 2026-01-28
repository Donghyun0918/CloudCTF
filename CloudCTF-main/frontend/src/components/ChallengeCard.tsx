interface Props {
    title: string;
    difficulty: string;
}

const ChallengeCard = ({ title, difficulty }: Props) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className={`text-sm ${difficulty === 'Easy' ? 'text-green-400' : 'text-yellow-400'}`}>
                {difficulty}
            </span>
        </div>
    );
};

export default ChallengeCard;
