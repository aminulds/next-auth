import {currentRole} from "@/lib/current-role";

const SettingPage = async () => {
    const role = await currentRole();
    return (
        <div>
            Role: {role}
        </div>
    );
};

export default SettingPage;