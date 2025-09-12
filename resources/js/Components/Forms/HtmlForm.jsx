import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function HtmlForm({value, onChange, error, name}) {
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange({
                      target: {
                        name,
                        value: data
                      }
                    });
                  }}
                  onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                  }}
                  onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                  }}
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      writer.setStyle(
                        "height",
                        "178px",
                        editor.editing.view.document.getRoot()
                      );
                    });
                  }}
                //   config={{
                //     extraPlugins: [uploadPlugin]
                //   }}
            />
        </>
    )
}