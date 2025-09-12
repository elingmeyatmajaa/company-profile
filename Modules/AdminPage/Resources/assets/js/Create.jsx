import Master from "@/Layouts/Master";
import react from "react";
import _route from "@/helpers/_route";
import Container from "@/Components/Container";
import Breadcrumb from "@/Components/Breadcrumb";
import __ from "@/helpers/__";
import Grid from "@/Components/Grid";
import Form from "@/Components/Form";
import Card from "@/Components/Card";
import FormGroup from "@/Components/FormGroup";
import TextForm from "@/Components/Forms/TextForm";
import Button from "@/Components/Buttons/Button";
import FormLabel from "@/Components/Forms/FormLabel";
import SelectForm from "@/Components/Forms/SelectForm";
import FileForm from "@/Components/FileForm";
import HtmlForm from "@/Components/Forms/HtmlForm";
import CheckForm from "@/Components/Forms/CheckForm";
import saySomething from "@/helpers/saySomething";
import { router, useForm } from "@inertiajs/react";

export default function Create({
    page,
  
    errors, 
    referer }) {


    const { data, setData } = useForm({
        title: page.data.title ?? '',
        description: page.data.description ?? '',
        body: page.data.body ?? '',
        is_published: page.data.is_published ?? false,
        category: page.data.category_blogs ?? '',
        referer: referer
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(_route("admin.page.store"), data, {
            onSuccess: () => {
                saySomething();
            },
        });
    };
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Page Create")}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.page.index"),
                            current: false,
                        },
                        {
                            name: __("Page"),
                            href: _route("admin.page.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.page.create')",
                            current: true,
                        },
                    ]}
                />

                <Grid cols={1}>
                    <Grid.Span1>
                        <Form onSubmit={handleSubmit}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <Card.TitleText className="text-2xl mb-3">
                                           
                                        </Card.TitleText>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Grid cols={3}>
                                        <Grid.Span2>
                                            <FormGroup>
                                                <FormLabel>
                                                    {__("Title")}
                                                </FormLabel>
                                                <TextForm
                                                    value={data.title}
                                                    error={errors.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </FormGroup>
                                        </Grid.Span2>
                                        <Grid.Span2>
                                            <FormGroup>
                                                <FormLabel>
                                                    {__("Description")}
                                                </FormLabel>
                                                <TextForm
                                                    value={data.description}
                                                    error={errors.description}
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </FormGroup>
                                        </Grid.Span2>
                                        

                                        <Grid.Span3>
                                            <FormGroup>
                                                <FormLabel htmlFor="body">
                                                    {__("Body")}
                                                </FormLabel>
                                                <HtmlForm
                                                    id="body"
                                                    value={data.body}
                                                    onChange={(e) =>
                                                        setData(
                                                            "body",
                                                            e.target.value
                                                        )
                                                    }
                                                    error={errors.body}
                                                    rows={10}
                                                />
                                            </FormGroup>
                                        </Grid.Span3>

                                       
                                        <Grid.Span1>
                                            <FormGroup>
                                                <CheckForm
                                                    id="is_published"
                                                    checked={data.is_published}
                                                    onChange={(e) =>
                                                        setData(
                                                            "is_published",
                                                            !data.is_published
                                                        )
                                                    }
                                                    error={errors.is_published}
                                                >
                                                    {__("Published")}
                                                </CheckForm>
                                            </FormGroup>
                                        </Grid.Span1>
                                    </Grid>
                                    <div className="pt-5">
                                        <div className="flex justify-end">
                                            <Button.Light
                                                className="mr-3"
                                                href={referer}
                                                type={"button"}
                                            >
                                                {__("Cancel")}
                                            </Button.Light>
                                            <Button type="submit">
                                                {__("Save")}
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Grid.Span1>
                </Grid>
            </Container>
        </>
    );
}

Create.layout = (page) => <Master children={page} />;
