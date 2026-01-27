
const Profile = ({ name, age, skills = [] }) => {
    return (
        <div>
            <h1>
                I am {name} {age} years old
            </h1>
            <ul>
                {skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;