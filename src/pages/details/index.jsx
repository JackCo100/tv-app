import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiBaseUrl } from "../../api";
import { Layout } from "../layout";
import { Container, Grid, Item } from "../../components/Grid";

export const Details = () => {
    const [result, setResult] = useState(null);
    const urlBuilder = apiBaseUrl + "/shows/" + String(useParams().id);

    useEffect(() => {
        axios.get(urlBuilder).then((response) => {
            setResult(response.data);
        });
    }, [urlBuilder]);

    return (
        <Layout>
            <Container className={"mainContent"}>
                <button onClick={() => window.history.back()} className={"backButton"}>
                    Back to List
                </button>
                <Grid>
                    <Item xxlSpan={4} xlSpan={4} lgSpan={4} mdSpan={4} smSpan={4}>
                        <div className={"imageContainer"}>
                            <img src={result?.image?.original} alt={result?.name} />
                        </div>
                    </Item>
                    <Item xxlSpan={8} xlSpan={8} lgSpan={8} mdSpan={4} smSpan={4}>
                        <div>
                            <h1>{result?.name}</h1>
                            {result?.genres?.length > 0 && (
                                <p>Genres: {result.genres.join(", ")}</p>
                            )}
                            {result?.rating?.average && (
                                <p>Rating: {result.rating.average}</p>
                            )}
                            {result?.premiered && (
                                <p>Premiered: {result.premiered}</p>
                            )}
                            <div dangerouslySetInnerHTML={{ __html: result?.summary }} />
                        </div>
                    </Item>
                </Grid>
            </Container>
        </Layout>
    );
}