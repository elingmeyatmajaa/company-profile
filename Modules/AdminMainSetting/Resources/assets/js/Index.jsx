import Breadcrumb from "@/Components/Breadcrumb";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import FileForm from "@/Components/FileForm";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import _route from "@/helpers/_route";
import react from "react";
import { router, useForm } from "@inertiajs/react";
import TextForm from "@/Components/Forms/TextForm";
import AreaForm from "@/Components/AreaForm";
import Button from "@/Components/Buttons/Button";
import __ from "@/helpers/__";
import saySomething from "@/helpers/saySomething";

export default function Index({ mainSetting }) {
    const { data, setData } = useForm({
        ...mainSetting.data,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(_route("admin.main-setting.update"),{ ...data, _method: "PUT" },{
            onSuccess: () => {
                saySomething();
            },
        });
    };

    return (
        <>
            <Container>
                <Breadcrumb
                    title={__('Main Setting')}
                    items={[
                        {
                            name: __('Home'),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Main Setting"),
                            href: _route("admin.main-setting.index"),
                            current: true,
                        },
                    ]}
                />

                <Form onSubmit={handleSubmit}>
                    <Grid cols={2}>
                        <Grid.Span1>
                            <Card>
                                <Card.Header>
                                    <Card.Title></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FormGroup>
                                        <FormLabel htmlFor={"logo"}>
                                        {__('Logo')}
                                        </FormLabel>
                                        <FileForm
                                            value={data.logo}
                                            onChange={(e) =>
                                                setData("logo", e.target.value)
                                            }
                                            id="logo"
                                            name="logo"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel htmlFor={"favicon"}>
                                        {__('Favicon')}
                                        </FormLabel>
                                        <FileForm
                                            value={data.favicon}
                                            onChange={(e) =>
                                                setData(
                                                    "favicon",
                                                    e.target.value
                                                )
                                            }
                                            id="favicon"
                                            name="favicon"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel htmlFor={"title"}>
                                        {__('Title')}
                                        </FormLabel>
                                        <TextForm
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            id="title"
                                            name="title"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel htmlFor={"meta_description"}>
                                        {__('Meta Description')}
                                        </FormLabel>
                                        <AreaForm
                                            value={data.meta_description}
                                            onChange={(e) =>
                                                setData(
                                                    "meta_description",
                                                    e.target.value
                                                )
                                            }
                                            id="meta_description"
                                            name="meta_description"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel htmlFor={"meta_keywords"}>
                                        {__('Meta Keywords')}
                                        </FormLabel>
                                        <AreaForm
                                            value={data.meta_keywords}
                                            onChange={(e) =>
                                                setData(
                                                    "meta_keywords",
                                                    e.target.value
                                                )
                                            }
                                            id="meta_keywords"
                                            name="meta_keywords"
                                        />
                                    </FormGroup>
                                    <Button type="submit">Update</Button>
                                </Card.Body>
                            </Card>
                        </Grid.Span1>
                    </Grid>
                </Form>
            </Container>
        </>
    );
}

Index.layout = (page) => <Master children={page} />;
