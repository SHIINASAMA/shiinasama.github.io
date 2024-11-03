import MyHeader from "@/app/components/myheader";
import Main from "@/app/main"

export default async function Home() {
    return (
        <div className="my-container">
            <MyHeader img={"https://avatars.githubusercontent.com/u/40531369?v=4"}
                    title={"Kaoru@Earth at ~"}
                    description={"Good things come to those who wait."}/>
            <hr/>
            <Main/>
            <p>Number of visitors</p>
            <img src="https://api.moedog.org/count/@shiinasama.readme" alt={""}/>
        </div>
    );
}
