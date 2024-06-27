<script lang="ts">

    import {
        A,
        Blockquote,
        Heading,
        P, Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";

</script>

<main class="max-w-5xl mx-auto my-6 p-4 space-y-6">


    <Heading tag="h1" class="mb-12">À propos du simulateur</Heading>
    <P class="indent-6">J'ai créé cette application après avoir vu un post sur Reddit qui se moquait d'une fausse
        information du Rassemblement
        National sur les tranches d'imposition proposées par la NUPES à l'Assemblée Nationale en 2022. Cela
        m'a
        fait réaliser que je n'avais jamais bien compris le fonctionnement des tranches d'imposition en France.</P>

    <P class="indent-6">L'État définit le barème de l'impôt sur le revenu comme suit :</P>

    <Blockquote>
        <P> Le barème sert au calcul de votre impôt. Il est progressif et comporte plusieurs tranches
            de revenu, chacune
            correspondant à un taux d'imposition différent allant de 0 % à 45 %. Pour appliquer le barème à votre revenu
            imposable, il faut tenir compte du quotient familial, c'est-à-dire de votre nombre de parts, qui dépend de
            votre
            situation et du nombre de personnes dans votre foyer fiscal.</P>

        <P class="mt-6"><strong>Exemple du barème de 2024 (applicable aux revenus de 2023) :</strong></P>

        <Table class="my-6">
            <TableHead>

                <TableHeadCell>Tranches de revenus</TableHeadCell>
                <TableHeadCell>Taux d'imposition de la tranche de revenu</TableHeadCell>

            </TableHead>
            <TableBody tableBodyClass="divide-y">
                <TableBodyRow>
                    <TableBodyCell>Jusqu'à 11 294 €</TableBodyCell>
                    <TableBodyCell>0 %</TableBodyCell>
                </TableBodyRow>
                <TableBodyRow>
                    <TableBodyCell>De 11 295 € à 28 797 €</TableBodyCell>
                    <TableBodyCell>11 %</TableBodyCell>
                </TableBodyRow>
                <TableBodyRow>
                    <TableBodyCell>De 28 798 € à 82 341 €</TableBodyCell>
                    <TableBodyCell>30 %</TableBodyCell>
                </TableBodyRow>
                <TableBodyRow>
                    <TableBodyCell>De 82 342 € à 177 106 €</TableBodyCell>
                    <TableBodyCell>41 %</TableBodyCell>
                </TableBodyRow>
                <TableBodyRow>
                    <TableBodyCell>Plus de 177 106 €</TableBodyCell>
                    <TableBodyCell>45 %</TableBodyCell>
                </TableBodyRow>
            </TableBody>
        </Table>

        <P><A href="https://www.service-public.fr/particuliers/vosdroits/F1419" target="_blank">Plus d'informations sur
            le
            site Service-Public.fr</A>.</P>

    </Blockquote>


    <P class="indent-6">J'ai donc créé un outil simple et rapide qui permet de déterminer quelle grille d'imposition est la plus
        avantageuse pour une situation personnelle donnée. Il vous suffit de saisir votre revenu imposable et votre
        nombre de parts, et l'outil se charge du reste. Bien entendu, il ne prend pas en compte tous les cas
        spécifiques, mais il peut donner une bonne idée générale. À terme, nous prévoyons d'ajouter des grilles
        personnalisées pour une meilleure précision.</P>

    <P class="mt-6 italic"><strong>Exemple du barème LFI proposé en 2022:</strong></P>

    <Table>
        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
                <TableBodyCell>Jusqu'à 10 292 €</TableBodyCell>
                <TableBodyCell>1 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 10 292 € à 15 438 €</TableBodyCell>
                <TableBodyCell>5 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 15 438 € à 20 584 €</TableBodyCell>
                <TableBodyCell>10 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 20 584 € à 27 789 €</TableBodyCell>
                <TableBodyCell>15 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 27 789 € à 30 876 €</TableBodyCell>
                <TableBodyCell>20 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 30 876 € à 33 964 €</TableBodyCell>
                <TableBodyCell>25 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 33 964 € à 38 081 €</TableBodyCell>
                <TableBodyCell>30 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 38 081 € à 44 256 €</TableBodyCell>
                <TableBodyCell>35 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 44 256 € à 61 752 €</TableBodyCell>
                <TableBodyCell>40 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 61 752 € à 102 921 €</TableBodyCell>
                <TableBodyCell>45 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 102 921 € à 144 089 €</TableBodyCell>
                <TableBodyCell>50 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 144 089 € à 267 594 €</TableBodyCell>
                <TableBodyCell>55 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>De 267 594 € à 411 683 €</TableBodyCell>
                <TableBodyCell>60 %</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>Plus de 411 683 €</TableBodyCell>
                <TableBodyCell>90 %</TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>

</main>