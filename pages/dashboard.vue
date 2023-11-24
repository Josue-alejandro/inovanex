<template>
    <div class="content-component" >
        <UiDivBox class="top-bar">
            <div class="inside-bar">
                <div class="traf-section">
                    <h4>FILTRO DE ESTADISTICAS:</h4>
                    <div>
                        <button class="btn-red">HOY</button>
                        <button class="btn-green">EXCEL</button>
                    </div>
                </div>
                <div class="traf-section">
                    <IconsServer></IconsServer>
                    <div class="par">
                        <p>Trafico</p>
                        <p>124143</p>
                    </div>
                </div>
            </div>
        </UiDivBox>
        <!-- Seccion de stats -->
        <div class="stats-container">
            <DashboardStatDiv title="Sesiones" data="12312313">
                <IconsSignalSessions></IconsSignalSessions>
            </DashboardStatDiv>
            <DashboardStatDiv title="Pico Maximo" data="12312313">
                <IconsPeak></IconsPeak>
            </DashboardStatDiv>
            <DashboardStatDiv title="IPs unicas" data="12312313">
                <IconsIp></IconsIp>
            </DashboardStatDiv>
            <DashboardStatDiv title="Minutos" data="12312313">
                <IconsMinutes></IconsMinutes>
            </DashboardStatDiv>
        </div>
        <!-- Fin de la seccion de stats -->
        <!-- Seccion de las graficas -->
        <div>
            <!-- Grafica de lineas -->
            <UiDivBox class="graph">
                <div class="divTitle">
                    <p>Datos de oyentes</p>
                </div>
                <DashboardListeners></DashboardListeners>
            </UiDivBox>
        </div>
        <div>
            <!-- Grafica de pasteles -->
            <div class="chartsDiv">
                <UiDivBox class="chartDonut">
                    <div class="divTitle">
                        <p>Dispositivos</p>
                    </div>
                    <DashboardDevicesData></DashboardDevicesData>
                </UiDivBox>
                <UiDivBox class="chartDonut">
                    <div class="divTitle">
                        <p>Navegadores</p>
                    </div>
                    <DashboardBrowserData></DashboardBrowserData>
                </UiDivBox>
            </div>
        </div>
        <!-- Fin de la seccion de las graficas -->
    </div>
</template>

<style scoped>
.content-component{
    background-color: #eef0f8;
    width: 100%;
    height: calc(100vh - 65px);
    overflow-y: scroll;
}

.stats-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.top-bar{
    margin: 0px;
    border-radius: 0px;
    border-top: 0px solid black;
    padding: 1em;
}

.par{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.traf-section{
    display: flex;
    flex-direction: row;
}

.traf-section h4{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #686767;
}

.inside-bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.chartDonut{
    width: 43%;
    padding: 1em;
}

.chartsDiv{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.graph{
    width: inherit;
}

.divTitle{
    padding: 1em;
}

.btn-green{
    background-color: rgb(9, 163, 9);
    padding: 0.6em;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    margin-left: 14px;
}

.btn-red{
    background: #f8192f; ;
    padding: 0.6em;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    margin-left: 14px;
}
</style>