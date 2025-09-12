<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <style>
        * {
            padding: 0;
            margin: 0;
            /* border: 1px solid black; */
        }

        body {
            font-size: 1.5em;
            margin: 0 auto;
            line-height: 5em !important;
        }

        div.page {
            margin-top: 3mm;
            margin-left: 4mm;
            margin-right: 4mm;
            padding-top: 7mm;
            padding-bottom: 2mm;
            padding-left: 10mm;
            padding-right: 10mm;
        }

        #header {
            width: 100%;
            text-align: center;
            font-size: 1.5em;
            border-bottom: double 2px black;
        }

        .garis {
            border-bottom: double 2px black;
        }

        .top {
            width: 100%;
            font-size: 0.83em;
            margin-left: 10mm;
            font: "verdana";
            font-weight: bold;
        }

        .kop {
            font-size: 1.5em;
            text-align: center;
            word-spacing: 3px;
            line-height: 0.5em;
            font: "Times New Roman"
        }

        .kop1 {
            font-size: 1.6em;
            text-align: center;
            word-spacing: 3px;
            line-height: 1em;
            font: "Times New Roman"
        }

        .kop2 {
            font-size: 20PX;
            text-align: center;
            font: "Times New Roman";
            line-height: 0.9em;

        }

        .kop3 {
            font-size: 1em;
            text-align: center;
            font: "Times New Roman";
            line-height: 0.9em;
        }

        .an {
            line-height: 1.02em;
            font-size: 12px;
            text-align: justify;
            font: "Times New Roman";
        }

        .kotak {
            font-size: 1.6em;
            border-bottom: solid 0.5 px black;
            border-top: solid 0.5 px black;
            text-align: center;
            line-height: 1.2em;
        }

        .isi2 {
            line-height: 0.8em;
            font-size: 12px;
            /* font-style: italic; */
            text-align: left;
            font-weight: bold;
        }

        .baris {
            line-height: 0.8em;
            font-size: 10.7px;
            text-align: justify;
            font: "Times New Roman";
        }

        .halamanbaru {
            display: block;
            page-break-before: always;
        }


        .isi {
            line-height: 0.89em;
            font-size: 10px;
            text-align: justify;
            font: "Times New Roman";
            font-weight: bold;
        }

        .baris2 {
            line-height: 0.9em;
            font-size: 10.8px;
            font-weight: bold;
            text-align: justify;
            font: "Times New Roman";
        }

        .ttd {
            line-height: 1em;
            font-size: 10px;
            font: "Times New Roman";
            float: right;
        }

        .judul {
            font-size: 2.2em;
            letter-spacing: 0.2px;
            word-spacing: 5px;
        }

        .subjudul {
            font-size: 1.6em;
            letter-spacing: 0.1px;
            word-spacing: 2px;
        }

        .small {
            line-height: 1.02em;
            font-size: 8px;
            text-align: justify;
            font: "Times New Roman";
        }

        .tembusan {
            font-size: 10px;
            line-height: 0.8em;
        }

        .top1 {
            width: 100%;
            font-size: 0.89em;
            font: "verdana";
            font-weight: bold;
            line-height: 0.9em;
        }

        .baris1 {
            line-height: 1.03em;
            font-size: 14px;
            text-align: justify;
            font: "Times New Roman";
        }

        .baris1 {
            line-height: 0.86em;
            font-size: 11.4px;
            text-align: justify;
            font: "Times New Roman";
            word-spacing: 0.1px
        }

        .style1 {
            font-size: 10.4px;
            text-align: justify;
            font: "Times New Roman";
            line-height: 0.8em;
        }

        .footer {
            position: fixed;
            width: 100%;
            text-align: justify;
            font-size: 11px;
            font-style: italic
        }

        .daftar-kuantitas .thead th,
        .daftar-kuantitas .tbody td {
            border: 1px solid black;
            padding: 7px 5px;
        }

        .daftar-kuantitas table {
            border-collapse: collapse;

        }
    </style>
</head>

<body>
    <!-- <script>
        const skorPerIndex = [];

        kuesioners.forEach((item) => {
            if (item.survey_quetions) {
                item.survey_quetions.forEach((question, index) => {
                    if (!skorPerIndex[index]) {
                        skorPerIndex[index] = 0;
                    }
                    skorPerIndex[index] += question.skor;
                });
            }
        });
    </script> -->
    <div class="page">
        <table width="100%" height="848" border="0" style="text-align: center;" class="baris">
            <tr>
                <td colspan="8">&nbsp;</td>
            </tr> <br>
            <tr>
                <td colspan="8">
                    <div id="header">
                        <table width="100%">
                            <tr>
                                <td width="12%"><img width="60" height="60" src="storage/assets/logo_siantar.png"></td>
                                <td width="127%" style="text-align:center;line-height: 130%;">
                                    <span style="font-size:20px;"><strong>PEMERINTAH KOTA PEMATANGSIANTAR</strong></span><br>
                                    <span style="font-size:17px;"><strong>DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU</strong></span><br>
                                    <span style="font-size:14px;"><strong>Jalan Melanthon Siregar No. 36 Pematangsiantar 21128 Telp/Fax. (0622) 420330</strong></span><br>
                                    <span style="font-size:14px;"><strong>Email: dpmptsp_psiantar@yahoo.com, website: http://dpmptsp.pematangsiantarkota.go.id</strong></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="8" style="text-align: center; padding-left:12px; font-size:14px ;line-height: 15px;">
                    <strong>PENGOLAHAN DATA RESPONDEN SURVEI KEPUASAN MASYARAKAT</strong>
                </td>
            </tr>

            <tr>
                <td class="isi">&nbsp;</td>
                <td colspan="7" class="isi">&nbsp;</td>
            </tr>
            <tr>

                <td colspan="8" class="isi" style="text-align: left;">
                    <div class="daftar-kuantitas">
                        <table width="98%" height="26" style="text-align: center;" class="baris2" border="1">
                            <thead>
                                <tr class="thead">
                                    <th>NO</th>
                                    @foreach($columns as $key => $column)
                                    <th>U{{$key+1}}</th>
                                    @endforeach
                                </tr>
                            </thead>
                            <tbody>

                                @foreach($kuesioners as $key => $kuesioner)
                                <tr class="tbody">
                                    <td>
                                        {{$key+1}}.
                                    </td>
                                    @foreach($kuesioner->questions as $question)
                                    <td>
                                        {{$question->skor}}
                                    </td>
                                    @endforeach
                                </tr>
                                @endforeach
                            </tbody>
                            <tfoot>
                                <tr class="tbody">
                                    <td>
                                        Jumlah Nilai per unsur
                                    </td>
                                    @foreach($columns as $key => $column)
                                    <td>
                                        {{round($kuesioners->sum(fn($i) =>  $i->questions[$key]->skor),3)}}
                                    </td>
                                    @endforeach
                                </tr>
                                <tr class="tbody">
                                    <td>
                                        NRR per unsur
                                    </td>
                                    @foreach($columns as $key => $column)
                                    <td>
                                        {{round($kuesioners->sum(fn($i) =>  $i->questions[$key]->skor) / $kuesioners->count(),3)}}
                                    </td>
                                    @endforeach
                                </tr>
                                <tr class="tbody">
                                    <td>
                                        NRR Tertimbang per unsur
                                    </td>
                                    @php
                                    $nrrikm = 0;
                                    @endphp
                                    @foreach($columns as $key => $column)
                                    <td>
                                        {{$nikm = round((1 / $columns->count()) * ($kuesioners->sum(fn($i) =>  $i->questions[$key]->skor) / $kuesioners->count()),3)}}
                                    </td>
                                    @php
                                    $nrrikm += $nikm;
                                    @endphp
                                    @endforeach
                                </tr>
                                <tr class="tbody">
                                    <td>
                                        Jumlah NRR IKM tertimbang
                                    </td>
                                    <td colspan="9">
                                        {{round($nrrikm,3)}}
                                    </td>
                                </tr>
                                <tr class="tbody">
                                    <td>
                                        IKM Unit pelayanan X 25
                                    </td>
                                    <td colspan="9">
                                        {{round($nrrikm * 25,3)}}
                                    </td>
                                </tr>

                            </tfoot>
                        </table>
                        <br>
                        <ul>
                            <h1>Keterangan:</h1>
                            <br>
                            <li>Sangat baik = 88,31 -100</li>
                            <li>Baik = 76,61 - 88,3</li>
                            <li>Sangat Baik = 76,6 - 65 </li>
                            <li>Tidak Baik = 25,00 - 64,99</li>
                            </li>
                        </ul>
                    </div>

    </div>
    </td>
    </tr> <br>
    </table>

    </div>
</body>

</html>