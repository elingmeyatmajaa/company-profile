import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Container from "@/Components/Container";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import CheckForm from "@/Components/Forms/CheckForm";
import FormLabel from "@/Components/Forms/FormLabel";
import HtmlForm from "@/Components/Forms/HtmlForm";
import SelectForm from "@/Components/Forms/SelectForm";
import Grid from "@/Components/Grid";
import ContainerModal from "@/Components/Modals/ContainerModal";
import TextForm from "@/Components/Forms/TextForm";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import react from "react";
import { router, useForm } from "@inertiajs/react";
import Card from "@/Components/Card";

export default function Edit({ page, errors, referer }) {
    const { data, setData } = useForm({
        ...page.data,
        referer: referer,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(_route("admin.page.update", data.id), {...data,
            _method : 'PUT'
        }, {
            onSuccess: () => {
                saySomething();
            },
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (page.data && page.data.id) {
    //         router.post(
    //             _route("admin.page.update", page.data.id),
    //             { ...data, _method: "PUT" },
    //             {
    //                 onSuccess: () => {
    //                     saySomething();
    //                 },
    //             }
    //         );
    //     } else {
    //         console.error("Invalid data or missing ID");
    //     }
    // };
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Page Edit")}
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
                                        <Card.TitleText className="text-2xl mb-3"></Card.TitleText>
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

Edit.layout = (page) => <Master children={page} />;
