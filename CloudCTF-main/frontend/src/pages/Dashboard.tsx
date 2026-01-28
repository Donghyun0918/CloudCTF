import ChallengeCard from '../components/ChallengeCard';

const Dashboard = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Challenges</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ChallengeCard title="S3 Bucket" difficulty="Easy" />
                <ChallengeCard title="IMDS SSRF" difficulty="Medium" />
            </div>
        </div>
    );
};

export default Dashboard;
