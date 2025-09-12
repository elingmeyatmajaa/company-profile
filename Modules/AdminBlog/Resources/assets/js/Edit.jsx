import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import FileForm from "@/Components/FileForm";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import CheckForm from "@/Components/Forms/CheckForm";
import FormLabel from "@/Components/Forms/FormLabel";
import HtmlForm from "@/Components/Forms/HtmlForm";
import SelectForm from "@/Components/Forms/SelectForm";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import { router, useForm } from "@inertiajs/react";
import react from "react";

export default function Edit({ blog, category_blog, errors, referer }) {
    const { data, setData } = useForm({
        title: blog.data.title ?? "",
        image: blog.data.image ?? "",
        body: blog.data.body ?? "",
        is_published: blog.data.is_published ?? false,
        category: blog.data.category_blogs ?? "",
        referer: referer,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (blog.data && blog.data.id) {
            router.post(
                _route("admin.blog.update", blog.data.id),
                { ...data, _method: "PUT" },
                {
                    onSuccess: () => {
                        saySomething();
                    },
                }
            );
        } else {
            console.error("Invalid data or missing ID");
        }
    };
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Blog Edit")}
                    items={[
                        {
                            name: __("Home"),
                            href: _route("admin.blog.index"),
                            current: false,
                        },
                        {
                            name: __("Blog"),
                            href: _route("admin.blog.index"),
                            current: false,
                        },
                        {
                            name: __("Create"),
                            href: "_route('admin.blog.create')",
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

                                        <Grid.Span1>
                                            <FormGroup>
                                                <FormLabel>
                                                    {__("Kategori Blog")}
                                                </FormLabel>
                                                <SelectForm
                                                    id="category"
                                                    value={data.category}
                                                    error={errors.category}
                                                    onChange={(e) =>
                                                        setData(
                                                            "category",
                                                            e.target.value
                                                        )
                                                    }
                                                    options={category_blog.map(
                                                        (option) => ({
                                                            value: option.id,
                                                            text: option.name,
                                                        })
                                                    )}
                                                />
                                            </FormGroup>
                                        </Grid.Span1>

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

                                        <Grid.Span3>
                                            <FormGroup>
                                                <FormLabel htmlFor="image">
                                                    {__("Image")}
                                                </FormLabel>
                                                <FileForm
                                                    id="image"
                                                    value={data.image}
                                                    onChange={(e) =>
                                                        setData(
                                                            "image",
                                                            e.target.value
                                                        )
                                                    }
                                                    error={errors.image}
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
