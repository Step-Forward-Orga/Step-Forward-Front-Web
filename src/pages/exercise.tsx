import { useAuth } from "../hooks/useAuth";

export default function Exercise() {
    useAuth();
    return <h1>Exercise Page</h1>;
}