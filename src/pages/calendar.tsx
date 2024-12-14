import { useAuth } from "../hooks/useAuth";

export default function Calendar() {
    useAuth();
    
    return <h1>Calendar Page</h1>;
}