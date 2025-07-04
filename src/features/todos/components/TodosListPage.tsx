import { Fragment, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import PageWrapper from "../../../components/common/PageWrapper";
import { Button } from "../../../components/ui";

import useTodosHook from "../hooks/useTodosHook";
import TodosCardsView from "./TodosCardsView";

const TodosListPage = () => {
    const { 
        todos,
        isLoading,
        hasError,
        isEmpty
    } = useTodosHook();

    const navigate = useNavigate();

    const content = useMemo(() => {
        if(isLoading) {
            return <h1>Loading...</h1>;
        }

        if(hasError) {
            return <h1>Error fetching todos</h1>;
        }

        if(isEmpty) {
            return (
                <Fragment>
                    <h1>No Record Yet!</h1>
                    <Button 
                        label="Create New Todo" 
                        onClick={() => navigate('create')} 
                    />
                </Fragment>
            )
        }

        return (
            <Fragment>
                <TodosCardsView todos={todos} />
            </Fragment>
        );
    }, [todos, isLoading, hasError]);

    return (
        <PageWrapper pageProps={{ title: 'Todos List Page', description: 'Todos List Page' }}>
            {content}
        </PageWrapper>
    );
};

export default TodosListPage;