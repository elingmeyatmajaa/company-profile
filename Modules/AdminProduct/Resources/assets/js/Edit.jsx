import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import FileForm from "@/Components/FileForm";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import HtmlForm from "@/Components/Forms/HtmlForm";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import { router, useForm } from "@inertiajs/react";
export default function Edit({ product, referer, errors }) {
    const { data, setData } = useForm({
        ...product.data,
        referer: referer,
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(_route("admin.product.update", data.id), {...data,
            _method : 'PUT'
        }, {
            onSuccess: () => {
                saySomething();
            },
        });
    };
    return (
        <>
            <Container>
                <Breadcrumb
                    title={__("Edit product")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("product"),
                            href: _route("admin.product.index"),
                            current: false,
                        },
                        {
                            name: __("Edit"),
                            href: _route("admin.product.edit", data),
                            current: true,
                        },
                    ]}
                />

                <Grid>
                    <Grid.Span1>
                        <Form method={"PUT"} onSubmit={handleSubmit}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <Card.TitleText className="text-2xl mb-0">
                                            {__("Product Edit Form")}
                                        </Card.TitleText>
                                        <Card.TitleDescription className="mt-1 max-w-2xl text-sm text-gray-500">
                                            {__("Please fill form below")}
                                        </Card.TitleDescription>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FormGroup>
                                        <FormLabel>{__("Image")}</FormLabel>
                                        <FileForm
                                            name={"image"}
                                            value={data.image}
                                            onChange={(e) =>
                                                setData("image", e.target.value)
                                            }
                                            error={errors.image}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>{__("Title")}</FormLabel>

                                        <TextForm
                                            name={"title"}
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            error={errors.title}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>{__("Body")}</FormLabel>
                                        <HtmlForm
                                            value={data.body}
                                            onChange={(e) =>
                                                setData("body", e.target.value)
                                            }
                                            error={errors.body}
                                        />
                                    </FormGroup>
                                    <div className="pt-5">
                                        <div className="flex justify-end">
                                            <Button.Light
                                                className="mr-3"
                                                href={referer}
                                            >
                                                {__("Cancel")}
                                            </Button.Light>
                                            <Button type="submit">
                                                {__("Update")}
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
